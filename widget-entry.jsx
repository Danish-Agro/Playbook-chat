import React from "react";
import { mount } from "./playbook-chat-widget.jsx";
import cssText from "./playbook-chat.css?inline";

function init() {
  const host = document.getElementById("playbook-chat");
  if (!host) return;

  // Guard against double-initialisation (e.g. script loaded twice)
  if (host.shadowRoot) return;

  const apiEndpoint =
    host.dataset.apiEndpoint || "/api/playbook-chat";

  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = cssText;
  shadow.appendChild(style);

  const container = document.createElement("div");
  shadow.appendChild(container);

  mount(container, { apiEndpoint });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
