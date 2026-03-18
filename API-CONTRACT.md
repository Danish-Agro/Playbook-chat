# API contract for the widget

POST /api/playbook-chat
Content-Type: application/json

Request body:
{
  "messages": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}

Response body:
{
  "reply": "Assistant reply text",
  "sources": [
    {
      "file": "playbook/rules.md",
      "heading": "Five Golden Rules",
      "excerpt": "Short supporting excerpt..."
    }
  ]
}

Rules:
- Backend retrieval must use only files in `knowledge/documents/`.
- LLM must not use web browsing or external retrieval.
- If answer is missing from sources, backend should return that clearly.
