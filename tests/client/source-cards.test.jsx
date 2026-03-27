// @vitest-environment jsdom

/**
 * Client-side UI tests for source card rendering in PlaybookSearch.
 *
 * Strategy:
 *   - Mock usePlaybookChat to inject controlled message/source data.
 *   - Mount the real PlaybookSearch component in jsdom.
 *   - Assert on the rendered DOM only — no implementation knowledge beyond the
 *     public prop/state surface.
 *
 * Note on test 9: the intentional behaviour (confirmed by the product owner) is
 * that sources with url: null are NOT rendered. The test verifies that the
 * source block is hidden when every source lacks a URL.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import PlaybookSearch from "../../playbook-chat.jsx";

// ---------------------------------------------------------------------------
// Mock usePlaybookChat so the component renders with controlled data without
// needing a live API endpoint or network.
// ---------------------------------------------------------------------------

vi.mock("../../usePlaybookChat.js", () => ({
  usePlaybookChat: vi.fn(),
}));

import { usePlaybookChat } from "../../usePlaybookChat.js";

/** Minimal stub of every value the component destructures from the hook. */
function makeHookStub(messages = []) {
  return {
    mode: "chat",
    input: "",
    setInput: vi.fn(),
    messages,
    loading: false,
    bottomRef: { current: null },
    textareaRef: { current: null },
    chatTextareaRef: { current: null },
    autoResize: vi.fn(),
    send: vi.fn(),
    retry: vi.fn(),
    onKey: () => vi.fn(),
    reset: vi.fn(),
  };
}

beforeEach(() => {
  vi.clearAllMocks();
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("PlaybookSearch — source card rendering", () => {
  // ── 9. All-null URLs → source block hidden ───────────────────────────────

  it("9. Source block is not rendered when every source has url: null", () => {
    // Root cause guarded: m.sources.some((s) => s.url) must be false when all
    // URLs are null, keeping the block entirely out of the DOM.
    // Product decision: non-clickable sources are not displayed.
    const messages = [
      { role: "user", content: "What is AI?" },
      {
        role: "assistant",
        content: "AI is Artificial Intelligence.",
        sources: [
          { heading: "What is AI?", url: null, excerpt: "Some excerpt text.", file: "doc.md" },
          { heading: "Introduction", url: null, excerpt: "Another excerpt.", file: "doc.md" },
        ],
      },
    ];

    usePlaybookChat.mockReturnValue(makeHookStub(messages));
    render(<PlaybookSearch />);

    // The heading that wraps all source cards must not be in the DOM.
    expect(screen.queryByText("Read more in the Playbook")).toBeNull();

    // No anchor elements inside a source block should exist.
    const sourceLinks = document.querySelectorAll(".ps-source-item");
    expect(sourceLinks.length).toBe(0);
  });

  // ── 10. Source card text quality ─────────────────────────────────────────

  it("10. Rendered source cards contain no 'Kilde', raw markdown syntax, or Danish fallback text", () => {
    const messages = [
      { role: "user", content: "How do I set up ChatGPT?" },
      {
        role: "assistant",
        content: "To set up ChatGPT, go to Settings and turn off training.",
        sources: [
          {
            heading: "ChatGPT Setup Guide",
            url: "https://ai-playbook.danishagro.com/get-started/getting-started-checklist/configuring-your-ai-tool/chatgpt",
            excerpt: "**Step 1:** Turn off training. *See settings.* Go to [Settings](https://example.com).",
            file: "doc.md",
          },
          {
            heading: "Quick setup checklist",
            url: "https://ai-playbook.danishagro.com/get-started/getting-started-checklist/configuring-your-ai-tool/chatgpt",
            excerpt: "## Quick checklist\n- Turn off training\n- Set custom instructions",
            file: "doc.md",
          },
        ],
      },
    ];

    usePlaybookChat.mockReturnValue(makeHookStub(messages));
    render(<PlaybookSearch />);

    // Source block must be present (confirms the test is actually exercising the cards).
    const block = screen.getByText("Read more in the Playbook");
    expect(block).toBeDefined();

    // Collect all text rendered inside source cards.
    const cards = document.querySelectorAll(".ps-source-item");
    expect(cards.length).toBeGreaterThan(0);

    const renderedText = Array.from(cards)
      .map((el) => el.textContent)
      .join(" ");

    // No Danish fallback label.
    expect(renderedText).not.toContain("Kilde");

    // No raw markdown bold/italic markers.
    expect(renderedText).not.toContain("**");
    expect(renderedText).not.toContain("* ");  // italic asterisk with space (not multiplication)

    // No raw markdown headings.
    expect(renderedText).not.toMatch(/^#{1,6}\s/m);

    // No raw markdown link syntax [text](url) — brackets that are part of a link.
    expect(renderedText).not.toMatch(/\[.+\]\(https?:\/\//);
  });
});
