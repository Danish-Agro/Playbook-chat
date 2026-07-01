import "./playbook-chat.css";
import ReactMarkdown from "react-markdown";
import { SendIcon, BotMark, TypingDots } from "./playbook-chat.components.jsx";
import { SUGGESTIONS } from "./playbook-chat.constants.js";
import { usePlaybookChat } from "./usePlaybookChat.js";

export default function PlaybookSearch(props = {}) {
  const {
    apiEndpoint = "/api/playbook-chat",
    suggestions = SUGGESTIONS,
  } = props;

  const {
    mode,
    input,
    setInput,
    messages,
    loading,
    textareaRef,
    chatTextareaRef,
    autoResize,
    send,
    retry,
    onKey,
    reset,
  } = usePlaybookChat({ apiEndpoint });

  return (
    <div className="ps-root">
      <header className="ps-header">
        {mode === "chat" && (
          <button className="ps-reset-btn" onClick={reset} aria-label="Start new question">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M8 2L4 6.5L8 11" stroke="#426716" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            New question
          </button>
        )}
      </header>

      {mode === "search" && (
        <div className="ps-search-view">
          <div className="ps-eyebrow">AI Playbook Assistant</div>
          <h1 className="ps-headline">
            Ask the AI Playbook
          </h1>
          <p className="ps-subline">
            Not sure where to start? Ask a question and we’ll help you find the right guidance, rule, prompt or checklist.
          </p>

          <div className="ps-searchbox">
            <textarea
              ref={textareaRef}
              rows={1}
              aria-label="Ask a question about the AI Playbook"
              placeholder="e.g. What data can I not share with AI tools?"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                autoResize(textareaRef);
              }}
              onKeyDown={onKey()}
            />
            <button className="ps-search-send" onClick={() => send()} disabled={!input.trim() || loading} aria-label="Send question">
              <SendIcon />
            </button>
          </div>

          <div className="ps-or">or try a question</div>

          <div className="ps-chips">
            {suggestions.map((s, i) => (
              <button key={i} className="ps-chip" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === "chat" && (
        <div className="ps-chat-view">
          <div className="ps-messages">
            {messages.map((m, i) => (
              <div key={i}>
                <div className={`ps-msg ${m.role}`}>
                  {m.role === "assistant" && <BotMark />}
                  {m.role === "user" && (
                    <div className="ps-user-mark">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="5.5" r="2.5" fill="#849938" />
                        <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#849938" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                  <div className="ps-msg-content">
                    {m.role === "assistant" ? (
                      <>
                        <ReactMarkdown
                          components={{
                            a: ({ href, children }) => (
                              <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
                            ),
                          }}
                        >
                          {m.content}
                        </ReactMarkdown>
                        {Array.isArray(m.sources) && m.sources.some((s) => s.url) && (
                          <div className="ps-sources">
                            <div className="ps-sources-heading">Read more in the Playbook</div>
                            {m.sources.filter((src) => src.url).map((src, si) => {
                              const title = src.heading || src.title || src.file || "Source";
                              const excerpt = src.excerpt
                                ?.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [text](url) → text
                                .replace(/^#{1,6}\s+/gm, "")              // ## heading → plain
                                .replace(/\*\*/g, "")                     // bold markers
                                .replace(/\*/g, "")                       // italic markers
                                .trim();
                              return (
                                <a key={si} className="ps-source-item" href={src.url} target="_blank" rel="noopener noreferrer">
                                  <div className="ps-source-meta">{title}</div>
                                  {excerpt && <div className="ps-source-excerpt">{excerpt}</div>}
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
                {m.role === "assistant" && m.isError && i === messages.length - 1 && (
                  <button className="ps-retry-btn" onClick={retry} disabled={loading} aria-label="Retry">
                    Try again
                  </button>
                )}
                {i < messages.length - 1 && i % 2 === 1 && <div className="ps-msg-divider" style={{ marginTop: 14 }} />}
              </div>
            ))}
            {loading && (
              <div className="ps-msg assistant">
                <BotMark />
                <div className="ps-msg-content">
                  <TypingDots />
                </div>
              </div>
            )}
          </div>

          <div className="ps-chat-input-wrap">
            <div className="ps-chat-inputbox">
              <textarea
                ref={chatTextareaRef}
                rows={1}
                aria-label="Ask a follow-up question"
                placeholder="Ask a follow-up question..."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  autoResize(chatTextareaRef);
                }}
                onKeyDown={onKey()}
              />
              <button className="ps-chat-send" onClick={() => send()} disabled={!input.trim() || loading} aria-label="Send message">
                <SendIcon />
              </button>
            </div>
            <p className="ps-chat-hint">Press Enter to send · Shift + Enter for new line</p>
          </div>
        </div>
      )}
    </div>
  );
}
