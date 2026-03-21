import fs from "node:fs/promises";
import path from "node:path";
import { resolveUrl } from "./sitemap.js";

const DOCS_ROOT = path.resolve(process.cwd(), "knowledge", "documents");
const SUPPORTED_EXTENSIONS = new Set([".md", ".markdown", ".txt"]);

let cache = {
  loadedAt: 0,
  chunks: [],
};

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9æøå\s]/gi, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function makeChunks(filePath, content) {
  const rel = path.relative(DOCS_ROOT, filePath).replace(/\\/g, "/");
  const lines = content.split(/\r?\n/);
  const chunks = [];

  let heading = "Introduction";
  let buffer = [];

  const flush = () => {
    const text = buffer.join("\n").trim();
    buffer = [];
    if (!text) return;

    const maxSize = 1200;
    const url = resolveUrl(heading);
    if (text.length <= maxSize) {
      chunks.push({ file: rel, heading, url, text, tokens: tokenize(text) });
      return;
    }

    for (let i = 0; i < text.length; i += maxSize) {
      const part = text.slice(i, i + maxSize);
      chunks.push({ file: rel, heading, url, text: part, tokens: tokenize(part) });
    }
  };

  for (const line of lines) {
    if (line.startsWith("#")) {
      flush();
      heading = line.replace(/^#+\s*/, "").trim() || "Section";
      continue;
    }

    buffer.push(line);
  }

  flush();
  return chunks;
}

export async function loadKnowledgeChunks() {
  const now = Date.now();
  if (now - cache.loadedAt < 15000) return cache.chunks;

  try {
    const files = await walk(DOCS_ROOT);
    const docs = files.filter((f) => SUPPORTED_EXTENSIONS.has(path.extname(f).toLowerCase()));

    const chunks = [];
    for (const file of docs) {
      const content = await fs.readFile(file, "utf8");
      chunks.push(...makeChunks(file, content));
    }

    cache = { loadedAt: now, chunks };
    return chunks;
  } catch {
    cache = { loadedAt: now, chunks: [] };
    return [];
  }
}

export async function searchKnowledge(query, limit = 6) {
  const chunks = await loadKnowledgeChunks();
  if (!query || !chunks.length) return [];

  const terms = tokenize(query);
  if (!terms.length) return [];

  const scored = chunks
    .map((chunk) => {
      let score = 0;
      for (const term of terms) {
        const count = chunk.tokens.filter((t) => t === term).length;
        score += count;
      }

      const wholeQuery = query.trim().toLowerCase();
      if (wholeQuery && chunk.text.toLowerCase().includes(wholeQuery)) {
        score += 5;
      }

      return { chunk, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.chunk);

  return scored;
}
