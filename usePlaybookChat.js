import { useEffect, useMemo, useRef, useState } from "react";
import { createPlaybookAPIClient } from "./playbook-chat.api.js";

export function usePlaybookChat(options = {}) {
  const { apiEndpoint = "/api/playbook-chat" } = options;
  const apiClient = useMemo(() => createPlaybookAPIClient({ endpoint: apiEndpoint }), [apiEndpoint]);

  const [mode, setMode] = useState("search");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);
  const textareaRef = useRef(null);
  const chatTextareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const autoResize = (ref) => {
    const el = ref.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    if (chatTextareaRef.current) chatTextareaRef.current.style.height = "auto";

    const updated = [...messages, { role: "user", content: msg }];
    setMessages(updated);
    setMode("chat");
    setLoading(true);

    try {
      const { reply, sources } = await apiClient.send(updated);
      setMessages((prev) => [...prev, { role: "assistant", content: reply, sources }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please try again.", sources: [] },
      ]);
    }

    setLoading(false);
  };

  const onKey = () => (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const reset = () => {
    setMode("search");
    setMessages([]);
    setInput("");
    setTimeout(() => textareaRef.current?.focus(), 80);
  };

  return {
    mode,
    input,
    setInput,
    messages,
    loading,
    bottomRef,
    textareaRef,
    chatTextareaRef,
    autoResize,
    send,
    onKey,
    reset,
  };
}
