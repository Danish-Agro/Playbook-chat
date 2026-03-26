import http from "node:http";
import { URL } from "node:url";
import { answerFromPlaybook } from "./playbook-chat-service.js";

const PORT = Number(process.env.PORT || 8787);
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || 20);
const RATE_LIMIT_WINDOW_MS = 60_000;

// --- Logging ---
function log(level, message, meta = {}) {
  const entry = { time: new Date().toISOString(), level, message, ...meta };
  console.log(JSON.stringify(entry));
}

// --- Rate limiting (sliding window per IP) ---
const rateLimitStore = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (rateLimitStore.get(ip) || []).filter((t) => t > windowStart);
  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

function getAllowedOrigin(req) {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes(origin)) {
    return origin || "*";
  }
  return null;
}

function sendJson(res, statusCode, payload, allowedOrigin) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  };
  if (allowedOrigin) headers["Access-Control-Allow-Origin"] = allowedOrigin;
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(payload));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error("Invalid JSON in request body");
  }
}

const server = http.createServer(async (req, res) => {
  const start = Date.now();
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "unknown";
  const allowedOrigin = getAllowedOrigin(req);

  const originalEnd = res.end.bind(res);
  res.end = function (...args) {
    log("info", "request", {
      method: req.method,
      path: url.pathname,
      status: res.statusCode,
      ip,
      ms: Date.now() - start,
    });
    return originalEnd(...args);
  };

  if (req.method === "OPTIONS") {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    };
    if (allowedOrigin) headers["Access-Control-Allow-Origin"] = allowedOrigin;
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (!allowedOrigin) {
    sendJson(res, 403, { error: "Forbidden" }, null);
    return;
  }

  if (req.method === "GET" && url.pathname === "/health") {
    sendJson(res, 200, { ok: true }, allowedOrigin);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/playbook-chat") {
    if (isRateLimited(ip)) {
      log("warn", "rate_limited", { ip });
      sendJson(res, 429, { reply: "Too many requests. Please wait a moment and try again.", sources: [] }, allowedOrigin);
      return;
    }
    try {
      const body = await readBody(req);
      const messages = Array.isArray(body?.messages) ? body.messages : [];
      const result = await answerFromPlaybook(messages);
      sendJson(res, 200, result, allowedOrigin);
    } catch (error) {
      log("error", "api_error", { message: error instanceof Error ? error.message : String(error) });
      sendJson(res, 500, {
        reply: "Something went wrong. Please try again.",
        sources: [],
      }, allowedOrigin);
    }
    return;
  }

  sendJson(res, 404, { error: "Not found" }, allowedOrigin);
});

server.listen(PORT, () => {
  log("info", "server_started", { port: PORT, rateLimit: `${RATE_LIMIT_MAX} req/min` });
});
