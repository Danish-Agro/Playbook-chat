import { searchKnowledge } from "./retrieval.js";
import { generateAnswer } from "./llm.js";

function getLastUserMessage(messages) {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return String(messages[i].content || "");
  }
  return "";
}

// Concatenates the last `turns` user messages so follow-up questions like
// "Who do I contact?" carry enough context for BM25 retrieval.
function buildSearchQuery(messages, turns = 2) {
  const parts = [];
  for (let i = messages.length - 1; i >= 0 && parts.length < turns; i -= 1) {
    if (messages[i]?.role === "user") parts.unshift(String(messages[i].content || "").trim());
  }
  return parts.join(" ").trim();
}

function toSourceMeta(chunks) {
  return chunks.map((c) => ({
    file: c.file,
    heading: c.heading,
    url: c.url || null,
    excerpt: c.text.slice(0, 220).trim(),
  }));
}

export async function answerFromPlaybook(messages) {
  const question = getLastUserMessage(messages).trim();
  if (!question) {
    return {
      reply: "Please ask a question about the AI Playbook.",
      sources: [],
    };
  }

  const searchQuery = buildSearchQuery(messages);
  const context = await searchKnowledge(searchQuery, 6);

  if (!context.length) {
    return {
      reply: "I could not find this in the current AI Playbook documents. Please update the playbook content or rephrase your question.",
      sources: [],
    };
  }

  const result = await generateAnswer({
    question,
    context,
    history: messages,
  });

  const isFallback = result.reply.toLowerCase().includes("not covered in the ai playbook");

  return {
    reply: result.reply,
    sources: isFallback ? [] : toSourceMeta(context),
  };
}
