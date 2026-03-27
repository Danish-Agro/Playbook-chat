---
title: Common AI Mistakes
url: https://ai-playbook.danishagro.com/quality-assurance/common-ai-mistakes
section: Quality Assurance
---

# Common AI Mistakes

## Learn to spot the patterns before they cause problems

AI makes predictable mistakes. Once you know what to look for, you'll catch most errors in seconds. This page shows you the most common patterns and how to spot them fast.

---

## Why these patterns matter

AI doesn't make random errors. It makes **systematic** ones based on how it works. The same types of mistakes appear again and again across different tools and different tasks.

Learning these patterns is like learning to proofread: at first you read every word carefully, but eventually you start recognizing common typos instantly. This page gives you that pattern recognition for AI mistakes.

---

## The big four mistake categories

AI mistakes fall into four main types. Each has telltale signs you can learn to spot quickly.

**1. Hallucinations** - Making things up

AI invents facts, sources, statistics, and quotes with complete confidence

**2. Outdated information** - Wrong about timing

AI's knowledge has a cutoff date and doesn't know what happened after

**3. Bias and assumptions** - Unfair defaults

AI reflects biases from its training data and makes cultural assumptions

**4. Generic output** - Sounds good, says nothing

AI produces fluent text that's technically correct but lacks substance

---

## Quick reference: Spot the mistake

Use this quick guide when reviewing AI output:

**See specific statistics without sources?**

→ Probably hallucination. Verify or remove.

**See job titles, product names, or prices?**

→ Probably outdated. Check current information.

**See assumptions about gender, culture, or roles?**

→ Probably bias. Rewrite for neutrality.

**See lots of buzzwords and vague claims?**

→ Probably generic. Add specific details or cut it.

**See "recent" or "currently"?**

→ Check: recent when? Currently as of what date?

**See a quote from a real person?**

→ Verify they actually said it.

**See internal company data you didn't provide?**

→ Invented. Remove it.

**See perfect-sounding but unverifiable claims?**

→ Too good to be true. Check it.

---

## Mistake Type 1: Hallucinations

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

## Mistake Type 2: Outdated Information

### What it looks like

AI confidently describes situations, facts, or people as they were during its training period, not as they are now.

Examples:

- Describing someone in a job they left two years ago
- Referencing products that have been discontinued
- Citing policies that have changed
- Using old prices or specifications
- Referring to "recent" events that are actually years old

### Why it happens

AI's knowledge has a cutoff date (usually 1-2 years before the current date). It doesn't know about:

- Personnel changes
- Product launches or discontinuations
- Policy updates
- Market changes
- Recent news or events
- Current prices or availability

Think of it as talking to someone who's been out of the country for two years. They know a lot, but their knowledge stopped at a specific point.

### Common outdated information patterns

**Job titles and roles:**

- "Contact Peter Jensen, Head of Marketing at Danish Agro"

   (Peter moved to a different role last year)

**Product information:**

- "Danish Agro's FeedMaster 3000 is our flagship product"

   (FeedMaster 4000 launched 6 months ago)

**Pricing and availability:**

- "The standard membership fee is €199/year"

   (Pricing changed in the last price adjustment)

**Organizational structure:**

- "The IT department reports to the CFO"

   (Organizational restructuring changed this)

**"Recent" events that aren't recent:**

- "In recent months, the agriculture sector has..."

   (Describing something from 2023 as "recent" in 2026)

### How to spot outdated information fast

**Red flags:**

**Any names with titles or roles**

Always verify current roles for real people mentioned.

**"Recent," "currently," "now"**

When AI says something is recent or current, ask: relative to when?

**Specific prices, dates, or versions**

These change frequently. Verify before using.

**Descriptions of "the current situation"**

The current situation for AI might be 2 years old.

### The cutoff date rule

**Know your AI's knowledge cutoff:**

- GPT-4: April 2023
- Claude: Early 2023
- Copilot: Varies (but usually 1-2 years behind)

**If it matters when the information is from, verify it.**

Simple rule: Anything that could have changed in the last 2 years needs verification.

### What to do about outdated information

**For people and roles:**

Verify with your internal directory or ask someone who knows.

**For products and services:**

Check your own website or product catalog.

**For policies and procedures:**

Consult official documentation or your manager.

**For external information:**

Use web search to find current information.

**When in doubt:**

Remove specific claims and use more general language: "Contact your HR representative" instead of "Contact Anna Jensen in HR."

---

## Mistake Type 3: Bias and Assumptions

### What it looks like

AI makes assumptions about gender, culture, geography, and roles that may not match your context or that reinforce stereotypes.

Examples:

- Defaulting to male pronouns for leadership roles
- Assuming all users are in the US
- Stereotypical examples (nurses are female, engineers are male)
- Cultural assumptions that don't fit Nordic context
- Demographic assumptions in examples

### Why it happens

AI is trained on internet text, which contains all the biases, stereotypes, and assumptions present in online content. It doesn't have intent or prejudice, but it reflects patterns in its training data.

Think of it like a mirror of the internet: it shows back what it was shown, including the problematic parts.

### Common bias patterns

**Gender bias in professional examples:**

- "The CEO met with his team..." (assuming male)
- "Ask your secretary to schedule..." (assuming female)
- "The engineer will test his code..." (assuming male)

**Geographic and cultural bias:**

- Assuming US context (dates, measurements, holidays)
- Examples that don't fit Nordic business culture
- Currency defaulting to USD or generic "dollars"

**Role stereotyping:**

- Nurses and teachers assumed female
- Executives and engineers assumed male
- Manual labor assumed less skilled

**Demographic assumptions:**

- Assuming all farmers are older males
- Assuming tech roles are young people
- Assuming family structures (married with children)

**Accessibility oversights:**

- Examples that assume everyone can see, hear, or move freely
- Interfaces designed only for mouse users
- Content that's not screen-reader friendly

### How to spot bias fast

**Read with fresh eyes:**

On your second read-through, specifically look for:

**Pronouns:**

Are "he/his" used for professional roles? Switch to "they/their" or rewrite.

**Examples:**

Do all the leaders have male names? Do all the assistants have female names?

**Geographic assumptions:**

Does it assume everyone is in the US or understands US references?

**Cultural fit:**

Would this language work in a Danish/Nordic business context?

**Inclusion:**

Could someone from a different background see themselves in these examples?

### What to do about bias

**Neutralize pronouns:**

Change "The manager should review his reports" to "Managers should review their reports" or "The manager should review the reports."

**Diversify examples:**

If AI gives you 5 examples with male names in leadership roles, change some names or rewrite to avoid gender entirely.

**Localize assumptions:**

Change US-centric examples to Nordic or European ones. Replace "Thanksgiving" with relevant local holidays.

**Check stereotypes:**

If you notice stereotypical patterns (all nurses female, all executives male), actively rewrite examples to break the pattern.

**Add context AI doesn't have:**

If AI doesn't know your actual customer demographics, adjust examples to match reality.

### Why this matters for Danish Agro

Your content represents the company. Biased content:

- Alienates employees and customers who don't fit stereotypes
- Looks unprofessional and outdated
- Can create legal or reputational issues
- Doesn't reflect Danish Agro's actual diverse workforce and customer base

Taking 30 seconds to check for bias makes your content better and more inclusive.

---

## Mistake Type 4: Generic Output

### What it looks like

AI produces text that's grammatically perfect, reads smoothly, and says almost nothing useful. It's the corporate equivalent of empty calories.

Examples:

- Buzzwords without meaning ("synergy," "innovative solutions")
- Vague statements that could apply to any company
- Repetitive structure (every paragraph starts the same way)
- Lack of specific examples or concrete details
- "Professional" language that's actually just padding

### Why it happens

When AI doesn't have enough specific information about what you need, it falls back on common patterns it's seen many times. It generates "safe" corporate language that's technically correct but lacks substance.

Think of it like a student padding an essay: lots of words, not much actual content.

### Common generic patterns

**Empty buzzwords:**

- "Leveraging synergies to drive innovation"
- "Best-in-class solutions for optimal outcomes"
- "Cutting-edge technology to transform your business"
- "Streamlined processes for enhanced efficiency"

**Vague statements:**

- "We pride ourselves on excellent customer service"

   (What specifically makes it excellent?)

- "Our team of experts is ready to help"

   (Who? What expertise?)

- "We offer comprehensive solutions"

   (Comprehensive how? What solutions?)

**Repetitive structure:**

Every paragraph following the same pattern:

1. Generic statement
2. Vague supporting claim
3. Empty call to action

**Circular reasoning:**

- "Our product is innovative because it uses innovative technology"
- "We're the best choice because we deliver the best results"

**Hedging without reason:**

- "May," "might," "could" used excessively when you should be definitive
- "It's important to note that..." before obvious statements

### How to spot generic output fast

**The specificity test:**

Could this sentence apply to any company in your industry?

→ If yes, it's too generic

Could you replace "Danish Agro" with a competitor's name and it would still make sense?

→ If yes, add specific details

**The buzzword count:**

Count instances of:

- "Innovative," "cutting-edge," "best-in-class"
- "Synergy," "streamline," "leverage"
- "Solutions," "optimize," "transform"

More than 2-3 in a page of content? Time to edit.

**The "so what?" test:**

After each paragraph, ask "So what? What does this actually mean?"

If you can't answer with something specific and concrete, rewrite it.

### What to do about generic output

**Add specific details:**

Before: "We offer comprehensive agricultural solutions."

After: "We supply organic cattle feed, precision farming equipment, and agronomic consulting across Denmark and Sweden."

**Replace buzzwords with plain language:**

Before: "Leveraging our innovative platform to optimize your workflow."

After: "Our web portal lets you order supplies and track deliveries in real time."

**Use concrete examples:**

Before: "Our team has extensive expertise."

After: "Our agronomists have 15+ years of experience with dairy farming in Nordic climates."

**Cut the fluff:**

Before: "It is important to note that our customer service representatives are available to assist you."

After: "Contact customer service: 12 34 56 78"

**Make claims specific and verifiable:**

Before: "Most customers are satisfied."

After: "92% of customers rated our service 4 or 5 stars in our 2024 survey."

### Why generic content fails

**For readers:**

- Wastes their time
- Doesn't answer their actual questions
- Sounds like every other company
- Makes you seem less credible

**For you:**

- Doesn't showcase your actual value
- Doesn't help customers make decisions
- Doesn't differentiate Danish Agro
- Requires more editing to become useful

**Better to write less content that says something specific than more content that says nothing.**

---

## The two-minute mistake scan

When you're in a hurry, do this quick check:

**30 seconds: Statistics and sources**

Any numbers or citations? Verify the most important one.

**30 seconds: Names and roles**

Any people mentioned? Verify current titles and roles.

**30 seconds: Pronouns and bias**

Scan for "he/his" in professional contexts. Check stereotypes.

**30 seconds: Buzzword count**

More than 2-3 empty buzzwords? Flag for editing.

**If you found problems:** Do a deeper check with the full validation framework.

**If everything looks clean:** Good to go, but stay alert.

---

## Learning from mistakes

**When you catch an AI mistake:**

1. **Note the pattern:** What type was it? Hallucination? Bias? Generic?
2. **Check for more:** If you found one, there might be others of the same type
3. **Update your prompts:** Add specific instructions to avoid this mistake next time
4. **Share with colleagues:** Help your team learn to spot the same patterns

**Example:**

If AI invents statistics in one response, check all other claims with numbers. Then in your next prompt, add: "Do not include statistics unless you're certain they're accurate. If uncertain, say so."

---

## Common mistake combinations

AI mistakes often appear together. If you spot one, check for others:

**Hallucination + Outdated = Double trouble**

AI invents a statistic AND dates it to 2023, making it sound recent and verified.

**Generic + Bias = Vague stereotypes**

"Our team of expert engineers" (generic) + assuming all male (bias)

**Outdated + Hallucination = Confident nonsense**

Real person, old job title, invented quote

**When one mistake appears, slow down and check the rest carefully.**

---

## Building your mistake-spotting skills

**You'll get faster with practice:**

**Week 1:** Mistakes take 5 minutes to spot

**Week 4:** You see hallucinations immediately

**Week 8:** You catch bias and generic content while reading

**Week 12:** It's automatic - like spell-checking

**How to practice:**

**Daily:** Review one piece of AI output specifically looking for mistakes

**Weekly:** Compare before/after when you've edited AI content

**Monthly:** Notice which mistake types you catch most easily

**The goal isn't perfection - it's building pattern recognition.**

---

## When mistakes aren't mistakes

**Not every unusual output is wrong:**

**AI challenges your assumption:**

Sometimes AI's different perspective is actually valuable. If something surprises you, verify it before assuming it's wrong.

**AI uses unexpected phrasing:**

Different wording isn't necessarily wrong - just different from how you'd say it.

**AI is more formal/casual than you expected:**

That's a style choice, not an error (though you should adjust it to match your voice).

**Real mistakes have factual, logical, or ethical problems. Style preferences are just preferences.**

---

## Remember

AI makes predictable mistakes. Learn the patterns, and you'll catch them before they cause problems.

**The four big types:**

1. Hallucinations (making things up)
2. Outdated information (old facts)
3. Bias (unfair assumptions)
4. Generic output (empty language)

**The quick check:**

Statistics → verify

Names/roles → check current

Pronouns → neutralize

Buzzwords → cut

**The mindset:**

Trust but verify. AI is a tool, not a source of truth.

---

## Next steps

- **Use the Quality Checklist** for a structured review process
- **See How to Validate AI Output** for detailed verification methods
- **Check Validation by Content Type** for content-specific guidance
- **Review Testing Your Output** for advanced techniques

**Need help identifying a specific mistake?**

Contact the AI Playbook Team: [jfra@danishagro.dk](mailto:jfra@danishagro.dk)
