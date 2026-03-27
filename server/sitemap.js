const BASE = "https://ai-playbook.danishagro.com";
const GS = `${BASE}/get-started`;
const RS = `${BASE}/rules-and-safety`;
const QA = `${BASE}/quality-assurance`;

// Ordered from most specific to least specific — first match wins.
const URL_MAP = [
  // ── Rules: individual rules ──────────────────────────────────────────────
  { url: `${RS}/golden-rules/rule-1-always-review-ai-output`, keywords: ["rule 1", "always review ai output"] },
  { url: `${RS}/golden-rules/rule-2-never-share-confidential-data`, keywords: ["rule 2", "never share confidential data"] },
  { url: `${RS}/golden-rules/rule-3-be-transparent-when-you-use-ai`, keywords: ["rule 3", "be transparent when you use ai"] },
  { url: `${RS}/golden-rules/rule-4-use-ai-to-enhance-not-replace-your-expertise`, keywords: ["rule 4", "use ai to enhance"] },
  { url: `${RS}/golden-rules/rule-5-when-in-doubt-ask`, keywords: ["rule 5", "when in doubt, ask"] },
  { url: `${RS}/golden-rules`, keywords: ["the golden rules", "golden rules"] },
  { url: `${RS}/data-protection-basics`, keywords: ["data protection basics", "think before you share", "anonymization: how to do it", "tools and their data security"] },
  { url: `${RS}/ive-shared-something-i-shouldnt`, keywords: ["mistakes happen \u2014 here\u2019s what to do", "who to contact", "why reporting matters", "what happens when you report"] },
  { url: RS, keywords: ["rules and safety", "rules & safety"] },

  // ── Quality Assurance: validation layers ─────────────────────────────────
  { url: `${QA}/how-to-validate-ai-output/layer-1-fact-checking-methods`, keywords: ["cross-reference specific claims", "the \"too good to check\" trap", "checking sources and citations"] },
  { url: `${QA}/how-to-validate-ai-output/layer-2-tone-style-review`, keywords: ["does it sound right for the situation", "removing generic ai language"] },
  { url: `${QA}/how-to-validate-ai-output/layer-3-logic-reasoning-checks`, keywords: ["does the argument actually make sense", "spotting false confidence"] },
  { url: `${QA}/how-to-validate-ai-output/layer-4-authenticity-ownership`, keywords: ["making it yours"] },
  { url: `${QA}/how-to-validate-ai-output`, keywords: ["how to validate ai output", "validation framework", "the 5-minute deep check", "common validation mistakes", "building a validation habit"] },

  // ── Quality Assurance: common mistakes ───────────────────────────────────
  { url: `${QA}/common-ai-mistakes/1-hallucinations-making-things-up`, keywords: ["hallucinations", "making things up", "common hallucination patterns", "how to spot hallucinations"] },
  { url: `${QA}/common-ai-mistakes/2-outdated-information-wrong-about-timing`, keywords: ["outdated information", "the cutoff date rule", "wrong about timing"] },
  { url: `${QA}/common-ai-mistakes/3-bias-and-assumptions-unfair-defaults`, keywords: ["bias and assumptions", "unfair defaults", "common bias patterns"] },
  { url: `${QA}/common-ai-mistakes/4-generic-output-sounds-good-says-nothing`, keywords: ["generic output", "sounds good, says nothing", "common generic patterns"] },
  { url: `${QA}/common-ai-mistakes`, keywords: ["common ai mistakes", "learn to spot the patterns", "the big four mistake categories"] },

  { url: `${QA}/quality-checklist`, keywords: ["quality checklist", "check your work before it goes out", "the 4-question test", "red flags to watch for"] },
  { url: QA, keywords: ["quality assurance", "quick quality check"] },

  // ── Get Started: tool-specific setup guides ───────────────────────────────
  { url: `${GS}/getting-started-checklist/configuring-your-ai-tool/chatgpt`, keywords: ["chatgpt setup guide"] },
  { url: `${GS}/getting-started-checklist/configuring-your-ai-tool/microsoft-copilot`, keywords: ["microsoft copilot setup guide"] },
  { url: `${GS}/getting-started-checklist/configuring-your-ai-tool/claude`, keywords: ["claude setup guide"] },
  { url: `${GS}/getting-started-checklist/configuring-your-ai-tool/gemini`, keywords: ["google gemini setup guide"] },
  { url: `${GS}/getting-started-checklist/configuring-your-ai-tool/lechat`, keywords: ["le chat (mistral) setup guide"] },
  { url: `${GS}/getting-started-checklist/configuring-your-ai-tool`, keywords: ["configuring your ai tool", "the three things that matter most"] },
  { url: `${GS}/getting-started-checklist/5-things-to-do-first`, keywords: ["5 things to do first", "your quick start guide to ai at work", "the quick version", "the detailed version"] },
  { url: `${GS}/getting-started-checklist`, keywords: ["getting started checklist", "set yourself up for success"] },

  // ── Get Started: what is AI ───────────────────────────────────────────────
  { url: `${GS}/what-is-ai/simple-explanation`, keywords: ["simple explanation", "get the basics", "you've probably already used ai", "more than just chatgpt"] },
  { url: `${GS}/what-is-ai/how-ai-works`, keywords: ["how ai works", "how does ai generate responses", "training data: the foundation", "language models: the engine", "probability: the reason for mistakes", "a look under the hood"] },
  { url: `${GS}/what-is-ai/common-misconceptions`, keywords: ["common misconceptions", "separating myth from reality", "ai understands what it's saying", "ai is always right", "ai has access to the internet", "ai remembers everything", "ai will take my job", "free ai tools are private"] },
  { url: `${GS}/what-is-ai`, keywords: ["what is ai", "what ai is not"] },

  { url: GS, keywords: ["get started", "your guide to ai at danish agro", "what you'll find here"] },

  // ── Tools ─────────────────────────────────────────────────────────────────
  { url: `${BASE}/tools`, keywords: ["how we manage ai tools", "ai tool landscape", "why copilot is our recommendation", "currently blocked tools"] },

  // ── About ─────────────────────────────────────────────────────────────────
  { url: `${BASE}/about-this-playbook`, keywords: ["about this playbook"] },
];

/**
 * Returns the best-matching Playbook URL for a chunk heading, or null if none found.
 * @param {string} heading
 */
export function resolveUrl(heading) {
  if (!heading) return null;
  const h = heading.normalize("NFC").toLowerCase();
  for (const entry of URL_MAP) {
    for (const kw of entry.keywords) {
      if (h.includes(kw.toLowerCase())) return entry.url;
    }
  }
  return null;
}
