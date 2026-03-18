const DEFAULT_API_ENDPOINT = "/api/playbook-chat";

export function createPlaybookAPIClient(options = {}) {
  const { endpoint = DEFAULT_API_ENDPOINT } = options;

  return {
    async send(history) {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }

      const data = await res.json();
      return {
        reply: data.reply || "Sorry, I could not get a response. Please try again.",
        sources: Array.isArray(data.sources) ? data.sources : [],
      };
    },
  };
}
