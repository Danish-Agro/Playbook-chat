import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./widget-entry.jsx",
      name: "PlaybookChatWidget",
      formats: ["iife"],
      fileName: () => "widget.js",
    },
    outDir: "dist/widget",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
