import React from "react";
import ReactDOM from "react-dom/client";
import PlaybookSearch from "./playbook-chat.jsx";

const roots = new Map();

function resolveElement(target) {
  if (typeof target === "string") {
    return document.querySelector(target);
  }

  return target;
}

export function mount(target, options = {}) {
  const element = resolveElement(target);
  if (!element) {
    throw new Error("PlaybookChatWidget: target element not found.");
  }

  if (roots.has(element)) {
    return roots.get(element);
  }

  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <PlaybookSearch
        apiEndpoint={options.apiEndpoint}
        suggestions={options.suggestions}
      />
    </React.StrictMode>
  );

  roots.set(element, root);
  return root;
}

export function unmount(target) {
  const element = resolveElement(target);
  if (!element) return;

  const root = roots.get(element);
  if (!root) return;

  root.unmount();
  roots.delete(element);
}

if (typeof window !== "undefined") {
  window.PlaybookChatWidget = {
    mount,
    unmount,
  };
}
