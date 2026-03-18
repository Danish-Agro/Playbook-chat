import { mount } from "./playbook-chat-widget.jsx";

mount("#root", {
  apiEndpoint: "http://localhost:8787/api/playbook-chat",
});
