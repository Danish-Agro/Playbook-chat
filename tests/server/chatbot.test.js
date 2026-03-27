/**
 * Server integration tests for the playbook chatbot pipeline.
 *
 * Strategy:
 *   - Real retrieval (BM25 against the actual knowledge corpus on disk)
 *   - Mocked OpenAI API (global fetch stub) — no live key required
 *
 * The mock controls what the LLM "says". Assertions on `sources` and retrieval
 * behaviour are therefore genuine integration checks, not mock artefacts.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { answerFromPlaybook } from "../../server/playbook-chat-service.js";
import { searchKnowledge } from "../../server/retrieval.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Stubs global fetch so the OpenAI call returns `reply` without a live key.
 * Each test that needs a specific LLM response calls this before the assertion.
 */
function stubLLM(reply) {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({ choices: [{ message: { content: reply } }] }),
    })
  );
}

/**
 * Builds a minimal messages array for single-turn queries.
 */
function userMsg(content) {
  return [{ role: "user", content }];
}

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

beforeEach(() => {
  // Provide a fake key so generateAnswer doesn't short-circuit to the
  // "no API key configured" message before reaching the fetch stub.
  process.env.OPENAI_API_KEY = "test-key-vitest";
});

afterEach(() => {
  vi.unstubAllGlobals();
  delete process.env.OPENAI_API_KEY;
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("Playbook chatbot — server integration", () => {
  // ── 1. Basic retrieval + answer ──────────────────────────────────────────

  it("1. 'What is AI?' returns a non-empty answer and at least one source", async () => {
    stubLLM(
      "AI, or Artificial Intelligence, refers to computer systems that can perform tasks that normally require human intelligence."
    );

    const result = await answerFromPlaybook(userMsg("What is AI?"));

    expect(result.reply.length).toBeGreaterThan(0);
    expect(Array.isArray(result.sources)).toBe(true);
    expect(result.sources.length).toBeGreaterThan(0);
  });

  // ── 2. Acronym preservation in tokenizer ────────────────────────────────

  it("2. 'Can I use AI for PR?' retrieves results — confirms AI and PR tokens are not stripped", async () => {
    // Tests retrieval directly (no LLM needed).
    // Root cause being guarded: before the PRESERVE_TERMS fix, "AI" (length 2)
    // and "PR" (length 2) were both dropped by the `t.length > 2` filter,
    // leaving an empty token set and returning zero chunks.
    const chunks = await searchKnowledge("Can I use AI for PR?");

    expect(chunks.length).toBeGreaterThan(0);
  });

  // ── 3. Incident page URL appears in sources ──────────────────────────────

  it("3. 'What should I do if I shared something I shouldn't?' returns a source pointing to the incident page", async () => {
    stubLLM(
      "If you have shared something you shouldn't, you should report it immediately to your manager or IT security."
    );

    const result = await answerFromPlaybook(
      userMsg("What should I do if I shared something I shouldn't?")
    );

    const incidentSource = result.sources.find((s) =>
      s.url?.includes("ive-shared-something")
    );
    expect(incidentSource).toBeDefined();
  });

  // ── 4. ChatGPT setup returns at least one linked source ──────────────────

  it("4. 'How do I set up ChatGPT?' returns at least one source with a non-null URL", async () => {
    stubLLM(
      "To set up ChatGPT, navigate to Settings and turn off data sharing for training."
    );

    const result = await answerFromPlaybook(
      userMsg("How do I set up ChatGPT?")
    );

    const linkedSource = result.sources.find((s) => s.url !== null);
    expect(linkedSource).toBeDefined();
  });

  // ── 5. Tools page — deterministic across 3 runs ──────────────────────────

  it("5. 'Which AI tools are approved?' consistently returns sources pointing to the tools page", async () => {
    // BM25 is deterministic for the same corpus + query. Three sequential calls
    // must return identical tool-page URLs. Proves no random or stateful ranking.
    stubLLM("The approved AI tools at Danish Agro include Microsoft Copilot.");

    const query = userMsg("Which AI tools are approved?");
    const getToolUrls = (result) =>
      result.sources
        .filter((s) => s.url === "https://ai-playbook.danishagro.com/tools")
        .map((s) => s.url)
        .sort();

    const r1 = await answerFromPlaybook(query);
    const r2 = await answerFromPlaybook(query);
    const r3 = await answerFromPlaybook(query);

    const urls1 = getToolUrls(r1);
    expect(urls1.length).toBeGreaterThan(0);
    expect(getToolUrls(r2)).toEqual(urls1);
    expect(getToolUrls(r3)).toEqual(urls1);
  });

  // ── 6. Danish query → English answer ────────────────────────────────────

  it("6. A Danish query ('Hvad er AI?') returns an English answer without Danish characters", async () => {
    // "hvad" and "er" are Danish stop words and are filtered.
    // "AI" is extracted by PRESERVE_TERMS before lowercasing, producing token "ai".
    // Retrieval must therefore still find AI-related chunks.
    stubLLM(
      "AI stands for Artificial Intelligence. It refers to systems that perform tasks requiring human-like reasoning."
    );

    const result = await answerFromPlaybook(userMsg("Hvad er AI?"));

    expect(result.reply.length).toBeGreaterThan(0);

    // Assert English: no Danish-specific characters (æ ø å) in the reply.
    const danishChars = (result.reply.match(/[æøåÆØÅ]/g) || []).length;
    expect(danishChars).toBe(0);

    // Retrieval must have worked (not short-circuited to the no-context message).
    expect(result.reply).not.toContain("could not find this");
  });

  // ── 7. Not-covered response clears sources ───────────────────────────────

  it("7. When the model returns a not-covered response, sources is []", async () => {
    // Use a query that retrieves chunks (ensuring we reach the LLM), then
    // verify the isFallback guard strips sources when the sentinel phrase appears.
    stubLLM("This is not covered in the AI Playbook.");

    const result = await answerFromPlaybook(userMsg("What is AI?"));

    expect(result.reply).toContain("not covered in the AI Playbook");
    expect(result.sources).toEqual([]);
  });

  // ── 8. Follow-up context improves retrieval ──────────────────────────────

  it("8. Follow-up 'Who do I contact?' with prior context retrieves the incident/reporting section", async () => {
    // Turn 1: establish context.
    stubLLM(
      "If you made a mistake with AI, you should stop using the output and assess the impact."
    );
    const firstTurn = userMsg("What if I made a mistake with AI?");
    const r1 = await answerFromPlaybook(firstTurn);

    // Turn 2: follow-up question that is meaningless without prior context.
    // buildSearchQuery concatenates the two user turns, so BM25 receives:
    // "What if I made a mistake with AI? Who do I contact?"
    // Tokens: ["made", "mistake", "ai", "who", "contact"]
    // These should rank the incident/reporting page highly.
    stubLLM(
      "You should contact IT Security or your direct manager as described in the reporting section."
    );
    const secondTurn = [
      ...firstTurn,
      { role: "assistant", content: r1.reply },
      { role: "user", content: "Who do I contact?" },
    ];
    const r2 = await answerFromPlaybook(secondTurn);

    // Assert the incident/contact page appears in sources.
    const hasReportingSource = r2.sources.some(
      (s) =>
        s.url?.includes("ive-shared-something") ||
        s.heading?.toLowerCase().includes("contact") ||
        s.heading?.toLowerCase().includes("report") ||
        s.heading?.toLowerCase().includes("mistake")
    );
    expect(hasReportingSource).toBe(true);
  });
});
