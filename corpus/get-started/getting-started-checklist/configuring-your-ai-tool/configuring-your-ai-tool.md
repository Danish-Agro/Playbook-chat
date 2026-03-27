---
title: Configuring Your AI Tool
url: https://ai-playbook.danishagro.com/get-started/getting-started-checklist/configuring-your-ai-tool
section: Get Started > Getting Started Checklist
---

# Configuring Your AI Tool

**Get better results by setting up your AI tool properly from the start.**

Most people jump straight into using ChatGPT or Copilot without adjusting any settings. That's like using a new phone without setting it up — it works, but you're missing out on features that make it better for *you*.

This guide shows you the essential settings you should configure before you start working.

## The three things that matter most

No matter which tool you use, these are the settings you should always check:

**1. Turn off training**

By default, many AI tools use your conversations to improve their models. That means your inputs could be seen by the company's trainers. Always disable this for work use.

**2. Set up your preferences**

Every tool has a way to tell it who you are and how you like responses. This saves you from repeating context in every conversation and gives you better, more relevant answers.

**3. Understand what gets saved**

Some tools remember things across conversations. Others don't. Knowing the difference helps you decide what's safe to share — and what isn't.

## Choose your tool

Select your AI tool below for specific setup instructions:

- **ChatGPT** – The most popular option. Good all-rounder for most tasks.
- **Microsoft Copilot** – Integrated with Microsoft 365. Best for enterprise use.
- **Claude** – Excellent for long documents and complex analysis.
- **Gemini** – Google's AI. Strong integration with Google Workspace.
- **Le Chat (Mistral)** – EU-based. Good for multilingual content.

## General principles for all tools

### Privacy first

- Always check privacy settings before your first real conversation
- Disable training/data sharing for work use
- Use temporary or private modes for anything sensitive
- Review and clean your conversation history regularly

### Context is key

- AI tools have a "context window" — a limit to how much they can remember
- Long conversations may cause the AI to "forget" earlier instructions
- Start fresh conversations for new topics
- Summarise context when continuing work in a new chat

### Settings can reset

- Major updates sometimes reset your preferences
- Check your settings every few months
- Bookmark the settings page for quick access

## Quick comparison

| **Tool**     | **Training opt-out** | **Custom instructions** | **Memory**    | **Context size** |
| ------------ | -------------------- | ----------------------- | ------------- | ---------------- |
| ChatGPT      | ✅ Yes                | ✅ Custom Instructions   | ✅ Optional    | Medium           |
| M365 Copilot | ✅ Default off        | ⚠️ Limited              | ❌ No          | Medium           |
| Claude       | ✅ Yes                | ✅ Custom Styles         | ❌ No          | Very large       |
| Gemini       | ✅ Yes                | ✅ Gems                  | ⚠️ Via Google | Large            |
| Le Chat      | ✅ Yes                | ✅ Agents                | ❌ No          | Large            |

## Which tool should I use?

It depends on your task:

- **Quick questions and general tasks:** Any tool works fine
- **Long documents (50+ pages):** Claude or Gemini
- **Microsoft integration (Word, Outlook, Teams):** M365 Copilot
- **Google integration (Docs, Gmail):** Gemini
- **Code and technical work:** ChatGPT, Claude, or Le Chat (Codestral)
- **Multilingual content:** Le Chat or Gemini
- **EU data preference:** Le Chat (Mistral is based in France)

## Need help?

If you're unsure which tool to use or how to configure it, contact the AI Playbook team at [jfra@danishagro.dk](mailto:jfra@danishagro.dk).

## Next steps

Once you've configured your tool:

1. Test it with a few non-sensitive prompts
2. Read "Your first prompt" for tips on getting started
3. Review the Golden Rules before sharing any work data

# Configuring Your AI Tool

**Get better results by setting up your AI tool properly from the start.**

Most people jump straight into using ChatGPT or Copilot without adjusting any settings. That's like using a new phone without setting it up — it works, but you're missing out on features that make it better for *you*.

This guide shows you the essential settings you should configure before you start working.

---

## Step 1: Turn off data sharing for training

**Why this matters:** By default, many AI tools use your conversations to improve their models. That means your inputs could be seen by the company's trainers or even influence future responses to other users.

### ChatGPT (Free, Plus, Team)

1. Click your profile icon (bottom left)
2. Go to **Settings** → **Data Controls**
3. Turn OFF: **"Improve the model for everyone"**
4. Confirm your choice

**What this does:** Your conversations won't be used to train ChatGPT's models. They're still stored in your history, but OpenAI's trainers won't review them.

**Note:** ChatGPT Enterprise and Danish Agro's M365 Copilot already have this disabled by default.

### Microsoft Copilot (Free version)

The free Copilot doesn't offer an option to disable training. This is why we recommend using:

- **M365 Copilot** (paid, integrated with your Danish Agro account) for work
- **ChatGPT** (with training disabled) as an alternative for non-sensitive work

### Claude (by Anthropic)

1. Click your profile icon (bottom right)
2. Go to **Settings** → **Privacy**
3. Turn OFF: **"Allow Anthropic to use your conversations to train our models"**
4. Confirm your choice

**What this does:** Your conversations won't be used to train Claude's models. Anthropic also offers Enterprise plans with enhanced data protection.

**Note:** Claude is particularly good for:

- Long documents (huge context window ~200k tokens)
- Complex analysis and reasoning
- Code review and debugging
- Working with multiple files simultaneously

### Google Gemini

1. Click the menu icon (three lines, top left)
2. Go to **Settings** → **Privacy**
3. Under **Gemini Apps Activity**:
   - Turn OFF: **"Save Gemini Apps Activity"** (stops saving to your Google Account)
   - Or use **Auto-delete** to automatically remove after 3, 18, or 36 months
4. Review **Apps & services** settings

**What this does:** Prevents Google from storing your Gemini conversations in your Google Account activity. However, Google may still temporarily process your prompts.

**Note:** Gemini integrates with Google Workspace (Docs, Gmail, etc.), which can be powerful but requires careful data handling.

### Le Chat (by Mistral)

1. Click your profile icon (top right)
2. Go to **Settings** → **Privacy**
3. Turn OFF: **"Contribute to model improvement"**
4. Confirm your choice

**What this does:** Your conversations won't be used to improve Mistral's models. Le Chat is a European AI (based in France), which some users prefer for data residency reasons.

**Note:** Le Chat is particularly good for:

- Multilingual content (strong European language support)
- Fast responses (lightweight models available)
- Users who prefer EU-based AI providers
- Code generation and technical tasks

### Other AI tools

Check each tool's privacy settings. If you can't find a clear opt-out for training:

- Assume your data might be used
- Only use it for non-sensitive, public information
- Consider sticking to approved tools for work

**Pro tip:** Check this setting regularly. Sometimes tools update their policies and reset your preferences.

---

## Step 2: Set up custom instructions (your AI's personality)

**Why this matters:** Custom instructions tell the AI how to behave with you — like giving it a brief about who you are and how you want it to respond. This saves you from repeating the same context in every conversation.

### ChatGPT Custom Instructions

1. Click your profile icon → **Settings** → **Personalization**
2. Enable **Custom instructions**
3. Fill in two sections:

**Section 1: "What would you like ChatGPT to know about you?"**

This is context about YOU. Examples:

```other
I work in marketing at Danish Agro, an agricultural company.
I create content for dairy farmers and feed customers.
I need help with copywriting, campaign ideas, and content structure.
I prefer clear, direct language without corporate jargon.
```

Or:

```other
I'm a web developer at Danish Agro.
I work with WordPress, PHP, JavaScript, and CSS.
I need help debugging code, improving UX, and learning new techniques.
Assume I have intermediate coding skills.
```

**Section 2: "How would you like ChatGPT to respond?"**

This is about HOW it should answer. Examples:

```other
Be direct and concise. Skip the fluff.
Use bullet points for lists.
If you're not sure about something, say so.
Don't repeat my question back to me.
Suggest alternatives when relevant.
```

Or:

```other
Explain things step by step.
Use simple language, avoid jargon.
Give me examples when possible.
If I ask for code, include comments.
Challenge my assumptions if you see a better approach.
```

### Claude Custom Styles

Claude uses a slightly different approach called **Styles**:

1. Start any conversation
2. Click the **paintbrush icon** (top right of input box)
3. Choose a preset style or create your own

**Preset styles:**

- **Normal:** Balanced, conversational
- **Concise:** Shorter, more direct
- **Formal:** Professional tone
- **Explanatory:** More detailed with reasoning

**Creating a custom style:**

1. Click **"Create new style"**
2. Describe how you want Claude to respond
3. Give it a name (e.g., "Danish Agro Marketing")
4. Save and select it for future conversations

### Google Gemini Gems

Gemini uses **Gems** — custom AI assistants you create:

1. Click **"Gem manager"** in the sidebar
2. Click **"New Gem"**
3. Give it a name and instructions

Example for marketing:

```other
Name: Marketing Assistant
Instructions: You help with marketing content for an agricultural
company. Focus on clear, practical language. Our audience is
farmers and agricultural professionals. Avoid jargon.
```

### Le Chat (Mistral) Agents

Le Chat offers **Agents** for customized interactions:

1. Click **"Agents"** in the sidebar
2. Click **"Create Agent"**
3. Define the agent's name, instructions, and behaviour

Example:

```other
Name: Content Writer
Instructions: You help write professional content for an
agricultural company. Use clear, direct language. Focus on
practical value for farmers. Keep responses concise unless
asked for detail.
```

**Note:** Le Chat also allows you to select different Mistral models (like Mistral Large, Mistral Small) depending on your task complexity.

### M365 Copilot

M365 Copilot doesn't have traditional custom instructions. Instead:

- It automatically uses context from your Microsoft 365 data
- Use clear, specific prompts to guide its responses
- It adapts to the app you're using (Word, Outlook, Teams, etc.)

---

## Step 3: Understand and manage memory

**Why this matters:** Some AI tools remember information across conversations. This can be helpful (it knows your preferences) or risky (it stores sensitive info you shared once).

### ChatGPT Memory

ChatGPT has a **Memory** feature (if enabled):

- It remembers facts you've told it across *all* conversations
- Example: "I work at Danish Agro" → it remembers for next time
- You can review and delete memories: **Settings → Personalization → Memory**

**Should you enable it?**

- ✅ YES: For personal productivity, learning, non-work stuff
- ⚠️ MAYBE: For work, if you only share non-sensitive information
- ❌ NO: If you often work with confidential data

**Pro tip:** Review your memory monthly. Delete anything you don't want stored long-term.

### Claude Memory

Claude currently doesn't have a persistent memory feature across conversations. Each conversation is independent.

**What this means:**

- You need to provide context at the start of each new conversation
- Use Custom Styles (see Step 2) to save your preferences
- Or start with a context-setting message: "I'm [role] working on [topic]..."

**Advantage:** More privacy — nothing carries over between conversations automatically.

### Gemini Memory

Gemini saves conversation history in your Google Account activity (unless you disabled it in Step 1).

**Gemini doesn't have explicit "memory" across chats, but:**

- It can access your Google Workspace data (if you grant permission)
- Activity history affects what Google "knows" about you
- Use **Gems** to save personalized assistant configurations

### Le Chat Memory

Le Chat doesn't have persistent memory across conversations by default.

**What this means:**

- Each conversation starts fresh
- Use **Agents** (see Step 2) to save your preferences and context
- You can reference previous messages within the same conversation

**Advantage:** Clean slate for each session — no accidental data carryover.

---

## Step 4: Manage your conversation history

**Why this matters:** Your history can contain hundreds of conversations. Keeping it organized helps you find things later and removes old sensitive content.

### ChatGPT

**Archive conversations you want to keep but not see:**

- Hover over a conversation → Click **"..."** → **Archive**
- Access archived chats: Sidebar → **Archived**

**Delete conversations you don't need:**

- Hover over a conversation → Click **"..."** → **Delete**
- Or delete ALL: **Settings → Data Controls → Delete all conversations**

**Search your history:**

- Use the search bar in the sidebar
- Search by topic, date, or keywords

### Claude

**Organize with Projects:**

- Create projects for different work areas
- Add relevant conversations to each project
- Access via sidebar

**Delete conversations:**

- Hover over conversation → Click **"..."** → **Delete**

### Gemini

**Delete conversations:**

- Click conversation → Click **"..."** → **Delete**
- Or go to [**myactivity.google.com**](http://myactivity.google.com) to manage all Google activity

### Le Chat

**Delete conversations:**

- Hover over conversation in sidebar → Click **trash icon**
- Or click into conversation → **Settings** → **Delete**

**Pro tip for all tools:** Every 3-6 months, review and delete old work conversations, especially if they contained any business information.

---

## Step 5: Understanding conversation context limits

**Why this matters:** AI tools can't remember infinite amounts of text. They have a "context window" — think of it as short-term memory.

### What this means in practice

- **ChatGPT (GPT-4):** ~8,000-32,000 words (depending on version)
- **Claude:** ~200,000 words (~500 pages) — massive context window
- **Gemini:** ~30,000-1,000,000+ words (Gemini 1.5 Pro has the largest)
- **Le Chat:** ~32,000-128,000 words (depending on model selected)
- **M365 Copilot:** Varies by app, typically ~8,000-32,000 words

**Real-world comparison:**

- ChatGPT: ~1-2 research papers
- Claude: ~2-3 books
- Gemini Pro: ~5-10 books
- Le Chat (Large): ~1-2 books

**When you hit the limit:**

- The AI starts "forgetting" earlier parts of your conversation
- It might lose track of instructions you gave at the start
- Answers become less relevant

**How to manage this:**

1. **Start a new conversation** when:
   - You're switching topics completely
   - The AI seems to "forget" earlier context
   - The conversation is getting very long
2. **Summarize context** in a new chat:

```other
"Continuing from earlier: We're working on a customer presentation
for dairy farmers about sustainable feed solutions. So far we've
covered [X, Y, Z]. Now I need help with..."
```

3. **Use Custom Instructions/Styles** to avoid repeating basic context

**Tool selection based on context needs:**

- **Short tasks (< 5 pages):** Any tool works fine
- **Medium documents (5-50 pages):** ChatGPT, Claude, Gemini, or Le Chat
- **Large documents (50-500 pages):** Claude or Gemini Pro
- **Multiple large files:** Claude or Gemini with file upload

---

## Step 6: Choose the right conversation style/mode

**Why this matters:** Many tools offer different "modes" that change how they respond.

### ChatGPT

**Default mode** is conversational and balanced. No special settings needed for most work.

You can adjust **tone** informally by asking:

- "Be more concise"
- "Explain like I'm a beginner"
- "Use more technical language"

### Claude

Claude offers **writing styles** you can select per conversation:

- **Normal:** Balanced, conversational (default)
- **Concise:** Shorter, more direct responses
- **Formal:** Professional tone
- **Explanatory:** More detailed with reasoning

**For work at Danish Agro:**

- Use **Normal** for most tasks
- Use **Concise** when you need quick answers
- Use **Explanatory** for learning or complex topics
- Create a **Custom Style** for your specific role

### Google Gemini

Gemini doesn't have explicit style modes, but you can:

**Guide the tone in your prompt:**

```other
"Explain this in simple terms..."
"Give me a professional, formal response..."
"Be creative and suggest unusual ideas..."
```

**Use different Gems** (custom assistants) for different styles.

### Le Chat (Mistral)

Le Chat lets you choose different **models** for different needs:

- **Mistral Small:** Fast, good for simple tasks
- **Mistral Large:** More capable, better for complex reasoning
- **Codestral:** Optimized for code generation

**For work at Danish Agro:**

- Use **Mistral Large** for important content and complex analysis
- Use **Mistral Small** for quick questions and simple tasks
- Use **Codestral** for programming help

### Microsoft Copilot (Free/Bing)

Choose a conversation style:

- **Creative:** More imaginative, varied responses
- **Balanced:** Middle ground (default)
- **Precise:** More factual, concise, less creative

**For work at Danish Agro:**

- Use **Precise** for factual research, data analysis
- Use **Balanced** for content creation, brainstorming
- Use **Creative** for campaign ideas, creative content

### M365 Copilot

Automatically adapts based on the Microsoft app you're using:

- In Word: Helps with writing and document analysis
- In Outlook: Helps with emails and scheduling
- In Teams: Helps with meeting summaries and collaboration
- In Excel: Helps with data analysis and formulas
- In PowerPoint: Helps with presentation content and design

---

## Step 7: Browser extensions and plugins (optional)

**Why this matters:** Extensions can enhance your AI tool, but be careful about security.

### Approved extensions (check with IT first)

For ChatGPT:

- **Official ChatGPT browser extension** (Chrome, Edge)
- Allows quick access without opening a new tab

**Don't install:**

- Third-party "AI enhancer" extensions without IT approval
- Anything that promises to "unlock premium features for free"
- Browser extensions that ask for excessive permissions

**When in doubt:** Ask IT before installing any AI-related extension.

---

## Quick Setup Checklist

Use this checklist when setting up a new AI tool:

- [ ] Turn off data sharing for training (if available)
- [ ] Set up Custom Instructions / Styles / Agents
- [ ] Decide whether to enable Memory (if available)
- [ ] Bookmark or save important conversations
- [ ] Choose default conversation style (if applicable)
- [ ] Review privacy settings
- [ ] Test with a few non-sensitive prompts
- [ ] Check if you need IT approval for browser extensions

---

## Tool-Specific Setup Guides

### ChatGPT Quick Setup

```other
1. Settings → Data Controls → Disable training
2. Settings → Personalization → Set Custom Instructions
3. Settings → Personalization → Enable/disable Memory (your choice)
4. Settings → General → Choose theme (light/dark)
5. Start a test conversation to verify settings
```

### Claude Quick Setup

```other
1. Settings → Privacy → Disable "Allow training"
2. Start a conversation → Click paintbrush icon → Set Custom Style
3. Test: Upload a document to verify large context handling
4. Bookmark important conversations (they're not saved by default)
5. Explore Project features for organizing related conversations
```

### Google Gemini Quick Setup

```other
1. Menu → Settings → Privacy → Disable "Save Gemini Apps Activity"
2. Create a Gem (custom assistant) for your work role
3. Test: "Summarize this document" with a PDF upload
4. Review Google Workspace integration permissions
5. Set up auto-delete for activity history (3-36 months)
```

### Le Chat (Mistral) Quick Setup

```other
1. Settings → Privacy → Disable "Contribute to model improvement"
2. Create an Agent for your work role
3. Choose your preferred model (Large for complex, Small for quick tasks)
4. Test with a few prompts to verify settings
5. Explore available models for different task types
```

### M365 Copilot Quick Setup

```other
1. Open Copilot in M365 (copilot.microsoft.com or m365.cloud.microsoft/chat)
2. Sign in with your Danish Agro account
3. Choose "Work" conversation style
4. Test integration: Try "Summarize my recent emails about [topic]"
5. Explore app-specific features (Word, Teams, Outlook, Excel, PowerPoint)
```

---

## Common Questions

**Q: Do I need to set this up on every device?**

A: Most settings sync across devices when logged in. M365 Copilot settings are tied to your account.

**Q: What if I forget to turn off training before sharing something?**

A: You can delete the conversation immediately. Then go to Settings and disable training for future chats. If you shared sensitive data, follow the incident reporting process (see Rule 5).

**Q: Can I have different Custom Instructions for work vs. personal use?**

A: ChatGPT only allows one set of Custom Instructions. Consider:

- Keep them general enough for both
- Or use Temporary Chat for personal stuff
- Or use a separate personal account (not on work device)

**Q: How often should I review my settings?**

A: Every 3-6 months, or when:

- The tool releases major updates
- You change roles
- Your work focus shifts
- You notice unexpected behavior

**Q: Should I use the mobile app?**

A: Yes, but:

- ✅ Mobile apps typically sync your settings
- ⚠️ Always check privacy settings on mobile too
- ❌ Don't use public WiFi for sensitive work

**Q: Which tool should I use?**

A: It depends on your task:

- **ChatGPT:** Most popular, good all-rounder
- **Claude:** Best for long documents and complex analysis
- **Gemini:** Best for Google Workspace integration
- **Le Chat:** EU-based, good for multilingual content
- **M365 Copilot:** Best for Microsoft integration, enterprise security

---

## Next Steps

**Now that your tool is configured:**

1. Test it with a few simple, non-sensitive tasks
2. Explore the Prompt Engineering Basics guide
3. Check out Templates & Prompts for ready-made examples
4. Review the Golden Rules before sharing any work data

**Need help with setup?**

Contact the AI Playbook Team: [jfra@danishagro.dk](mailto:jfra@danishagro.dk)

---

## Remember

Good configuration at the start saves time and headaches later. Spend 10 minutes setting up properly, and you'll get better results from day one.

**The three most important settings:**

1. Turn off training (privacy)
2. Set up Custom Instructions / Styles / Agents (better responses)
3. Choose the right tool for the task (efficiency)

Do these first, experiment with the rest as you learn.
