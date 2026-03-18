import { searchKnowledge } from "./retrieval.js";
import { generateAnswer } from "./llm.js";

function getLastUserMessage(messages) {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return String(messages[i].content || "");
  }

  return "";
}

function toSourceMeta(chunks) {
  return chunks.map((c) => ({
    file: c.file,
    heading: c.heading,
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

  const context = await searchKnowledge(question, 6);

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

  return {
    reply: result.reply,
    sources: toSourceMeta(context),
  };
}
