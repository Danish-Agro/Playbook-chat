import fs from "node:fs/promises";
import path from "node:path";
import { resolveUrl } from "./sitemap.js";

const DOCS_ROOT = path.resolve(process.cwd(), "knowledge", "documents");
const HINTS_PATH = path.resolve(process.cwd(), "knowledge", "sitemap-hints.json");
const SUPPORTED_EXTENSIONS = new Set([".md", ".markdown", ".txt"]);
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutter

const STOP_WORDS = new Set([
  // Dansk
  "jeg", "du", "vi", "det", "den", "de", "han", "hun", "man",
  "hvad", "hvordan", "hvorfor", "hvornår", "hvilke", "hvilket",
  "kan", "må", "skal", "bør", "vil", "har", "have", "havde",
  "er", "var", "og", "eller", "men", "som", "til", "fra", "med",
  "ikke", "også", "for", "på", "om", "ved", "når", "der", "her",
  "alle", "noget", "nogen", "mere", "meget",
  // Engelsk
  "the", "and", "for", "are", "but", "not", "you", "all", "can",
  "her", "was", "one", "our", "out", "use", "how", "what", "which",
  "this", "that", "with", "have", "from", "they", "will", "been",
  "does", "does", "more", "also", "any", "its",
]);

let cache = {
  loadedAt: 0,
  chunks: [],
};

const PRESERVE_TERMS = new Set(["AI", "PR", "HR", "IT", "M365", "GDPR"]);

function tokenize(text) {
  // Extract uppercase acronyms / known domain terms before lowercasing.
  const preserved = (text.match(/\b[A-Z0-9]{2,6}\b/g) || [])
    .filter((t) => PRESERVE_TERMS.has(t))
    .map((t) => t.toLowerCase());

  const general = text
    .toLowerCase()
    .replace(/[^a-z0-9æøå\s]/gi, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));

  return [...new Set([...general, ...preserved])];
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

function makeChunks(filePath, content, hints = {}) {
  const rel = path.relative(DOCS_ROOT, filePath).replace(/\\/g, "/");
  const lines = content.split(/\r?\n/);
  const chunks = [];

  let heading = "Introduction";
  let currentUrl = null;
  let buffer = [];

  const flush = () => {
    const text = buffer.join("\n").trim();
    buffer = [];
    if (!text) return;

    const maxSize = 1200;
    if (text.length <= maxSize) {
      chunks.push({ file: rel, heading, url: currentUrl, text, tokens: tokenize(text) });
      return;
    }

    for (let i = 0; i < text.length; i += maxSize) {
      const part = text.slice(i, i + maxSize);
      chunks.push({ file: rel, heading, url: currentUrl, text: part, tokens: tokenize(part) });
    }
  };

  for (const line of lines) {
    if (line.startsWith("#")) {
      flush();
      const candidate = line.replace(/^#+\s*/, "").trim() || "Section";
      // Danish layout labels (e.g. "HERO SEKTION", "QUOTE SEKTION") are CMS
      // scaffolding, not content headings — keep the previous heading so chunks
      // aren't attributed to a Danish string in source cards.
      if (!/\bSEKTION\b/i.test(candidate)) {
        heading = candidate;
        const resolved = hints[heading] || resolveUrl(heading);
        if (resolved) currentUrl = resolved;
      }
      continue;
    }

    buffer.push(line);
  }

  flush();
  return chunks;
}

export async function loadKnowledgeChunks() {
  const now = Date.now();
  if (now - cache.loadedAt < CACHE_TTL_MS) return cache.chunks;

  try {
    let hints = {};
    try {
      const raw = await fs.readFile(HINTS_PATH, "utf8");
      hints = JSON.parse(raw);
    } catch {
      // Missing or malformed hints file — degrade gracefully.
    }

    const files = await walk(DOCS_ROOT);
    const docs = files.filter((f) => SUPPORTED_EXTENSIONS.has(path.extname(f).toLowerCase()));

    const chunks = [];
    for (const file of docs) {
      const content = await fs.readFile(file, "utf8");
      chunks.push(...makeChunks(file, content, hints));
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

  const headingTermsCache = new Map();

  const scored = chunks
    .map((chunk) => {
      let score = 0;

      for (const term of terms) {
        for (const t of chunk.tokens) {
          if (t === term) score += 1;
          else if (t.startsWith(term) || term.startsWith(t)) score += 0.5;
        }
      }

      // Boost hvis søgeord matches i sektionsoverskriften
      if (!headingTermsCache.has(chunk.heading)) {
        headingTermsCache.set(chunk.heading, tokenize(chunk.heading));
      }
      const headingTokens = headingTermsCache.get(chunk.heading);
      for (const term of terms) {
        if (headingTokens.includes(term)) score += 3;
      }

      // Boost ved eksakt frase-match i teksten
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
