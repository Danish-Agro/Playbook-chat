const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

const SYSTEM_PROMPT = [
  "You are an assistant for Danish Agro Group's AI Playbook.",
  "Always respond in English, regardless of the language of the question or the playbook content.",
  "You must answer ONLY using the playbook context provided below — never use your own training knowledge.",
  "If the answer cannot be found in the provided context, respond with exactly: 'This is not covered in the AI Playbook.' and nothing else.",
  "Do not infer, guess, or supplement with outside knowledge under any circumstances.",
  "Keep responses concise and practical.",
].join(" ");

export async function generateAnswer({ question, context, history }) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return {
      reply:
        "I can only answer from the AI Playbook documents, and no LLM API key is configured yet. Add OPENAI_API_KEY on the server to enable full chat responses.",
    };
  }

  const contextBlock = context
    .map((c, idx) => {
      const urlPart = c.url ? ` url=${c.url}` : "";
      return `[Source ${idx + 1}] file=${c.file} heading=${c.heading}${urlPart}\n${c.text}`;
    })
    .join("\n\n");

  const trimmedHistory = history
    .slice(-6)
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n");

  const userPrompt = [
    "Conversation (recent):",
    trimmedHistory || "(none)",
    "",
    "Playbook context:",
    contextBlock || "(none)",
    "",
    `Question: ${question}`,
    "",
    "Return a direct answer grounded in context. If uncertain, say it's not in the playbook.",
  ].join("\n");

  const res = await fetch(OPENAI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      max_tokens: 700,
      temperature: 0.1,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`LLM request failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return { reply: data?.choices?.[0]?.message?.content || "No answer generated." };
}
