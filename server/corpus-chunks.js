import fs from "node:fs/promises";
import path from "node:path";

export const CORPUS_ROOT = path.resolve(process.cwd(), "corpus");
export const SUPPORTED_EXTENSIONS = new Set([".md", ".markdown", ".txt"]);

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
  "does", "more", "also", "any", "its",
]);

const PRESERVE_TERMS = new Set([
  "AI", "PR", "HR", "IT", "M365", "GDPR", "FIXIT", "RISEN",
]);

export function tokenize(text) {
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

export async function walk(dir) {
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

export function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { url: null, body: content };
  const yaml = match[1];
  const body = match[2];
  const urlMatch = yaml.match(/^url:\s*(.+)$/m);
  return { url: urlMatch ? urlMatch[1].trim() : null, body };
}

export function makeChunks(filePath, content) {
  const { url: fileUrl, body } = parseFrontmatter(content);
  const rel = path.relative(CORPUS_ROOT, filePath).replace(/\\/g, "/");
  const lines = body.split(/\r?\n/);
  const chunks = [];

  let heading = "Introduction";
  let buffer = [];

  const flush = () => {
    const text = buffer.join("\n").trim();
    buffer = [];
    if (!text) return;

    const maxSize = 1200;
    if (text.length <= maxSize) {
      chunks.push({ file: rel, heading, url: fileUrl, text, tokens: tokenize(text) });
      return;
    }

    for (let i = 0; i < text.length; i += maxSize) {
      const part = text.slice(i, i + maxSize);
      chunks.push({ file: rel, heading, url: fileUrl, text: part, tokens: tokenize(part) });
    }
  };

  for (const line of lines) {
    if (line.startsWith("#")) {
      flush();
      const candidate = line.replace(/^#+\s*/, "").trim() || "Section";
      if (!/\bSEKTION\b/i.test(candidate)) {
        heading = candidate;
      }
      continue;
    }
    buffer.push(line);
  }

  flush();
  return chunks;
}

export async function loadCorpusChunks() {
  const files = await walk(CORPUS_ROOT);
  const docs = files.filter((f) => SUPPORTED_EXTENSIONS.has(path.extname(f).toLowerCase()));
  const chunks = [];
  for (const file of docs) {
    const content = await fs.readFile(file, "utf8");
    chunks.push(...makeChunks(file, content));
  }
  return chunks;
}
