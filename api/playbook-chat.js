import { answerFromPlaybook } from "../server/playbook-chat-service.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const messages = Array.isArray(req.body?.messages) ? req.body.messages : [];
    const result = await answerFromPlaybook(messages);
    res.status(200).json(result);
  } catch (error) {
    console.error("api_error", error);
    res.status(500).json({ reply: "Something went wrong. Please try again.", sources: [] });
  }
}
