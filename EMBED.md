# Embed Widget

## Local development
Run API and UI in separate terminals:

```bash
npm.cmd run dev:api
npm.cmd run dev:ui
```

The dev widget mounts to `#root` and calls:
- `http://localhost:8787/api/playbook-chat`

## Production build

```bash
npm.cmd run build
```

Then include built files and mount widget:

```html
<div id="playbook-chat-widget"></div>
<script src="/path/to/dist/assets/index-xxxx.js"></script>
<script>
  window.PlaybookChatWidget.mount("#playbook-chat-widget", {
    apiEndpoint: "https://your-domain.com/api/playbook-chat"
  });
</script>
```
