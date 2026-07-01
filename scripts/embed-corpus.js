#!/usr/bin/env node
/**
 * Generates semantic embeddings for all corpus chunks and writes them to
 * knowledge/embeddings.json. Run this locally whenever corpus content changes,
 * then commit the output so Vercel picks it up at deploy time.
 *
 * Usage:
 *   npm run embed
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { loadCorpusChunks } = await import(pathToFileURL(path.join(ROOT, "server/corpus-chunks.js")).href);

const OPENAI_EMBED_URL = "https://api.openai.com/v1/embeddings";
const EMBED_MODEL = "text-embedding-3-small";
const OUTPUT = path.join(ROOT, "knowledge/embeddings.json");
const BATCH_SIZE = 50;

async function embedBatch(texts, apiKey) {
  const res = await fetch(OPENAI_EMBED_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model: EMBED_MODEL, input: texts }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Embeddings API error (${res.status}): ${body}`);
  }

  const data = await res.json();
  // Sort by index to guarantee alignment with input order
  return data.data.sort((a, b) => a.index - b.index).map((d) => d.embedding);
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("Error: OPENAI_API_KEY is not set. Run with: npm run embed");
    process.exit(1);
  }

  console.log("Loading corpus chunks...");
  const chunks = await loadCorpusChunks();
  console.log(`Found ${chunks.length} chunks across corpus.\n`);

  const embedded = [];
  const totalBatches = Math.ceil(chunks.length / BATCH_SIZE);

  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;

    // Prepend heading to give the embedding model more context
    const texts = batch.map((c) => `${c.heading}\n\n${c.text}`);

    process.stdout.write(`  Batch ${batchNum}/${totalBatches} (${batch.length} chunks)...`);
    const vectors = await embedBatch(texts, apiKey);

    for (let j = 0; j < batch.length; j++) {
      embedded.push({ ...batch[j], embedding: vectors[j] });
    }
    console.log(" done");
  }

  await fs.writeFile(OUTPUT, JSON.stringify(embedded), "utf8");

  const sizeKb = ((await fs.stat(OUTPUT)).size / 1024).toFixed(1);
  console.log(`\nSaved ${embedded.length} chunks to knowledge/embeddings.json (${sizeKb} KB)`);
  console.log("Commit this file so the Vercel deployment picks it up.");
}

main().catch((err) => {
  console.error("\nFailed:", err.message);
  process.exit(1);
});
