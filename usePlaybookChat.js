import { useEffect, useMemo, useRef, useState } from "react";
import { createPlaybookAPIClient } from "./playbook-chat.api.js";

export function usePlaybookChat(options = {}) {
  const { apiEndpoint = "/api/playbook-chat" } = options;
  const apiClient = useMemo(() => createPlaybookAPIClient({ endpoint: apiEndpoint }), [apiEndpoint]);

  const [mode, setMode] = useState("search");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const lastUserMessageRef = useRef(null);

  const messagesRef = useRef(null);
  const textareaRef = useRef(null);
  const chatTextareaRef = useRef(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const autoResize = (ref) => {
    const el = ref.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const sendMessages = async (updatedMessages) => {
    setLoading(true);
    try {
      const { reply, sources } = await apiClient.send(updatedMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply, sources }]);
    } catch (err) {
      const isRateLimited = err?.status === 429;
      const errorContent = isRateLimited
        ? "Too many requests. Please wait a moment and try again."
        : "Something went wrong. Please try again.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorContent, sources: [], isError: true },
      ]);
    }
    setLoading(false);
  };

  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    if (chatTextareaRef.current) chatTextareaRef.current.style.height = "auto";

    const updated = [...messages, { role: "user", content: msg }];
    lastUserMessageRef.current = updated;
    setMessages(updated);
    setMode("chat");
    await sendMessages(updated);
  };

  const retry = async () => {
    if (!lastUserMessageRef.current || loading) return;
    setMessages(lastUserMessageRef.current);
    await sendMessages(lastUserMessageRef.current);
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
    messagesRef,
    textareaRef,
    chatTextareaRef,
    autoResize,
    send,
    retry,
    onKey,
    reset,
  };
}
