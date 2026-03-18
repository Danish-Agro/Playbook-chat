export const SendIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M2 8.5L15 2L9 15L8 9.5L2 8.5Z" fill="currentColor" />
  </svg>
);

export const BotMark = () => (
  <div
    style={{
      width: 34,
      height: 34,
      borderRadius: 8,
      background: "#426716",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="7" r="3" fill="white" />
      <path
        d="M3.5 16c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export const TypingDots = () => (
  <div style={{ display: "flex", gap: 5, padding: "4px 0", alignItems: "center" }}>
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        style={{
          display: "inline-block",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#849938",
          animation: "td 1.2s ease-in-out infinite",
          animationDelay: `${i * 0.16}s`,
        }}
      />
    ))}
  </div>
);

