---
title: Mistake Type 1 – Hallucinations
url: https://ai-playbook.danishagro.com/quality-assurance/common-ai-mistakes/1-hallucinations-making-things-up
section: Quality Assurance > Common AI Mistakes
---

### What it looks like

AI confidently states "facts" that are completely invented. It creates:

- Statistics that don't exist
- Sources that were never published
- People who don't exist (or gives real people fake credentials)
- Events that never happened
- Companies or products that aren't real

**The scary part:** Hallucinations look exactly like real information. There's no warning sign in the output itself.

### Why it happens

AI generates text by predicting what word comes next based on patterns in its training data. It doesn't "know" things - it recognizes patterns. When it encounters a gap in its knowledge, it fills in with plausible-sounding text rather than admitting uncertainty.

Think of it like autocomplete on steroids: it's trying to complete the sentence in the most likely way, not in the most truthful way.

### Common hallucination patterns

**Made-up statistics:**

- "Studies show 73.2% of Danish farmers prefer organic feed"
- "Market research indicates a 47% increase in precision agriculture adoption"
- "According to recent surveys, 8 out of 10 dairy producers..."

**Red flag:** Oddly specific numbers without named sources. Real statistics usually come with "According to [specific organization]" or "A 2024 study by [researcher] found..."

**Invented sources:**

- "As reported in the Journal of Agricultural Economics (2023)..."
- "According to the Danish Agro Industry Report..."
- "Smith & Johnson's research on sustainable farming..."

**Red flag:** Citations that sound academic but can't be found via Google Scholar or the organization's website.

**Fake quotes:**

- Real person, made-up quote: "As Peter Larsen from Danish Agro said, 'Innovation starts with trust.'"
- Fake expert: "According to Dr. Hansen, a leading expert in agricultural AI..."

**Red flag:** Quotes from internal people you can verify with, or "experts" with generic names you can't find online.

**Confident claims about company-specific information:**

- "Danish Agro's market share in Sweden grew by 15% last quarter"
- "The company's new product line generated €2M in revenue"
- "Customer satisfaction scores improved to 4.8/5"

**Red flag:** Internal data you never provided. If you didn't give AI the information and it's not public, it's probably invented.

### How to spot hallucinations fast

**The 30-second check:**

**Step 1:** Look for specific numbers, names, and sources

**Step 2:** Pick the most important one

**Step 3:** Google it in quotes

**Step 4:** If you can't verify it in 30 seconds, flag it or remove it

**The Google test:**

Copy suspicious claims into Google with quotation marks. If nothing comes up, it's likely invented.

**The "too convenient" test:**

If AI gives you exactly the statistic or source you needed to prove your point, be extra suspicious. Real research rarely lines up that perfectly.

**The internal knowledge test:**

For company-specific claims, ask yourself: "Did I tell AI this, or is it public information?" If neither, it's made up.

### Real examples from Danish Agro

**Hallucination:**

"Danish Agro's customer portal sees 15,000 daily active users with an average session time of 8.5 minutes."

**Why it's wrong:**

These specific metrics weren't provided to AI and aren't publicly available. AI invented plausible-sounding numbers.

**Hallucination:**

"According to the 2024 Nordic Agriculture Technology Report, Danish Agro ranks as the 3rd most innovative agri-business in the region."

**Why it's wrong:**

The "Nordic Agriculture Technology Report" doesn't exist. AI created a realistic-sounding source to support the claim.

### What to do when you find hallucinations

**Don't panic.** Hallucinations are normal AI behavior, not a sign you're using it wrong.

**Option 1: Verify and correct**

If the claim is useful, find the real source or data and replace the hallucination with accurate information.

**Option 2: Remove it**

If you can't quickly verify it, just delete the claim. Generic statements are better than invented facts.

**Option 3: Rephrase more generally**

Change "73% of farmers prefer organic feed" to "Many farmers are choosing organic feed options."

**Never:** Just assume it's probably correct because it sounds good.

---
