---
title: Claude Setup Guide
url: https://ai-playbook.danishagro.com/get-started/getting-started-checklist/configuring-your-ai-tool/claude
section: Get Started > Configuring Your AI Tool
---

# Claude Setup Guide

**Get Claude configured for work in about 5 minutes.**

Claude (made by Anthropic) is known for handling very long documents and complex analysis. Its massive context window makes it ideal for working with extensive materials.

## Quick setup checklist

- [ ] Turn off training data sharing
- [ ] Set up a Custom Style
- [ ] Understand the conversation model
- [ ] Test with a document upload

## Step 1: Turn off training

By default, Anthropic may use your conversations to improve Claude. Turn this off for work use.

1. Click your profile icon (bottom right)
2. Go to **Settings** → **Privacy**
3. Turn OFF: **"Allow Anthropic to use your conversations to train our models"**
4. Confirm your choice

**What this does:** Your conversations won't be used to train Claude. Anthropic also offers Enterprise plans with additional data protection.

## Step 2: Set up Custom Styles

Claude uses Styles to adjust how it responds. You can use presets or create your own.

### Using preset styles

1. Start any conversation
2. Click the **paintbrush icon** (top right of the input box)
3. Choose from:
   - **Normal:** Balanced, conversational (default)
   - **Concise:** Shorter, more direct responses
   - **Formal:** Professional tone
   - **Explanatory:** More detailed with reasoning

### Creating a custom style

1. Click the paintbrush icon
2. Click **"Create new style"**
3. Describe how you want Claude to respond
4. Give it a name
5. Save and select it

**Example custom style for marketing:**

```other
Name: Danish Agro Marketing

Instructions: You help with marketing content for an agricultural
company. Use clear, practical language. Our audience is farmers
and agricultural professionals. Be direct, avoid jargon, and
focus on practical value. When writing content, match our
professional but approachable tone.
```

**Example custom style for technical work:**

```other
Name: Technical Assistant

Instructions: You help with technical tasks including code,
documentation, and analysis. Be precise and thorough. Include
code comments when writing code. Explain your reasoning for
technical decisions. Flag potential issues or edge cases.
```

## Step 3: Understand Claude's memory model

Claude doesn't have persistent memory across conversations. Each conversation starts fresh.

**What this means:**

- Claude won't remember previous conversations
- You need to provide context at the start of each new chat
- Custom Styles save your preferences, but not conversation content

**Advantage:** More privacy — nothing carries over between conversations automatically.

**How to work with this:**

- Use Custom Styles to avoid repeating basic preferences
- Start conversations with relevant context
- When continuing work, summarise what was done before

**Example opening for continued work:**

```other
I'm continuing work on a customer newsletter. Previously, I drafted
sections on [X] and [Y]. The tone should be professional but friendly,
aimed at dairy farmers. Now I need help with [Z].
```

## Step 4: Using Projects (optional)

Claude offers Projects to organise related conversations:

1. Click **"Projects"** in the sidebar
2. Create a new project
3. Add conversations to the project
4. Access all related chats in one place

**Good for:**

- Ongoing work that spans multiple conversations
- Keeping related materials together
- Finding previous discussions on a topic

## Working with long documents

Claude's biggest strength is its context window — roughly 200,000 words (about 500 pages). This makes it excellent for:

- Analysing lengthy reports
- Working with multiple documents at once
- Maintaining context in complex projects
- Code review across large files

### Uploading documents

1. Click the **attachment icon** in the input box
2. Select your file (PDF, Word, text files, code files)
3. Claude will read the entire document
4. Ask questions or request analysis

**Tips for document work:**

- You can upload multiple files in one conversation
- Be specific about what you want: "Summarise the key findings" vs "What does this say?"
- Claude can compare documents: "What are the differences between these two versions?"

## Managing conversations

### Save important conversations

Claude doesn't save conversations by default. Click **"Save"** to keep conversations you want to return to.

### Delete conversations

- Hover over conversation → Click **"..."** → **Delete**

### Search

- Use the search function to find saved conversations

**Pro tip:** Save conversations with clear, descriptive titles so you can find them later.

## Conversation styles

Beyond Custom Styles, you can adjust Claude's responses by asking:

- "Be more concise"
- "Explain this in simpler terms"
- "Give me more detail"
- "Format this as a table"
- "Walk me through this step by step"

## Common issues

**"Claude doesn't remember what I said yesterday"**

That's by design — Claude doesn't have memory across conversations. Summarise relevant context when starting a new chat.

**"Responses are too long"**

Use the Concise style, or add to your Custom Style: "Keep responses brief unless I ask for detail."

**"Claude won't help with my request"**

Claude has safety guidelines. If your request is legitimate but being declined, try rephrasing or providing more context about your professional need.

## Why choose Claude?

**Best for:**

- Long documents and extensive analysis
- Complex reasoning tasks
- Working with multiple files simultaneously
- Code review and debugging
- Tasks requiring nuanced understanding

**Consider other tools for:**

- Integration with Microsoft 365 (use M365 Copilot)
- Integration with Google Workspace (use Gemini)
- Quick, simple questions (any tool works)

## Settings to check regularly

Every few months, verify:

- Training is still disabled
- Your Custom Styles still match your needs
- Old saved conversations are cleaned up

## Next steps

1. Complete the setup checklist above
2. Try uploading a document to test the large context window
3. Create a Custom Style for your most common work type
4. Read "Your first prompt" for tips on getting good results
