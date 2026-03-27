---
title: Le Chat (Mistral) Setup Guide
url: https://ai-playbook.danishagro.com/get-started/getting-started-checklist/configuring-your-ai-tool/lechat
section: Get Started > Configuring Your AI Tool
---

# Le Chat (Mistral) Setup Guide

**Get Le Chat configured for work use.**

Le Chat is the AI assistant from Mistral, a French AI company. It's a good choice if you prefer an EU-based provider or need strong multilingual support.

## Quick setup checklist

- [ ] Turn off training data sharing
- [ ] Choose your preferred model
- [ ] Create an Agent for your work role
- [ ] Test with a multilingual task

## Step 1: Turn off training

By default, Mistral may use your conversations to improve their models. Turn this off for work use.

1. Go to [**chat.mistral.ai**](http://chat.mistral.ai)
2. Click your profile icon (top right)
3. Go to **Settings** → **Privacy**
4. Turn OFF: **"Contribute to model improvement"**
5. Confirm your choice

**What this does:** Your conversations won't be used to train Mistral's models.

## Step 2: Choose your model

Le Chat lets you choose different models depending on your task. Each has different strengths.

### Available models

**Mistral Large**

- Most capable model
- Best for complex reasoning and analysis
- Slower, but higher quality
- Use for: Important content, detailed analysis, complex tasks

**Mistral Small**

- Faster and lighter
- Good for simple tasks
- Quick responses
- Use for: Quick questions, simple drafts, brainstorming

**Codestral**

- Optimised for code
- Understands programming languages well
- Good at debugging and explaining code
- Use for: Programming help, code review, technical documentation

### Selecting a model

1. Start a new conversation
2. Click the model selector (usually top of the chat)
3. Choose your preferred model
4. The selection applies to the current conversation

**Tip:** Start with Mistral Large for important work. Switch to Small for quick questions to save time.

## Step 3: Create Agents

Agents are custom assistants with specific instructions — similar to ChatGPT's Custom Instructions or Claude's Styles.

### Creating an Agent

1. Click **"Agents"** in the sidebar
2. Click **"Create Agent"**
3. Define:
   - **Name:** Something descriptive
   - **Instructions:** How the agent should behave
   - **Model:** Which Mistral model to use
4. Save

### Example Agents

**Content Writer:**

```other
Name: Content Writer

Instructions: You help write professional content for Danish Agro,
an agricultural company. Use clear, direct language. Our audience
is farmers and agricultural professionals. Avoid jargon and
corporate speak. Focus on practical value and benefits. Match
a professional but approachable tone.

Model: Mistral Large
```

**Quick Helper:**

```other
Name: Quick Helper

Instructions: You provide fast, concise answers. Keep responses
brief unless asked for more detail. Get straight to the point.
Use bullet points for lists. No unnecessary preamble.

Model: Mistral Small
```

**Code Assistant:**

```other
Name: Code Assistant

Instructions: You help with programming tasks. Write clean,
well-commented code. Explain your reasoning. Flag potential
issues or edge cases. Suggest improvements when relevant.
Support multiple programming languages.

Model: Codestral
```

### Using Agents

1. Start a new conversation
2. Select your Agent from the list
3. The Agent's instructions and model apply automatically

## Step 4: Understanding Le Chat's memory

Le Chat doesn't have persistent memory across conversations. Each conversation starts fresh.

**What this means:**

- Le Chat won't remember previous conversations
- You need to provide context at the start of each chat
- Agents save your preferences, but not conversation content

**How to work with this:**

- Use Agents to store your standard preferences
- Start conversations with relevant context
- Summarise previous work when continuing a task

## Managing conversations

### Conversation history

- Recent conversations appear in the sidebar
- Click to return to a conversation

### Delete conversations

- Hover over conversation → Click trash icon
- Or open conversation → Settings → Delete

### Search

- Use the search function to find specific conversations

## Context window

Le Chat's context window varies by model:

- **Mistral Large:** ~128,000 words
- **Mistral Small:** ~32,000 words
- **Codestral:** ~32,000 words

This is enough for most work tasks. For very long documents, Mistral Large handles more content.

## Multilingual strengths

Mistral was developed in France and has strong European language support. Le Chat works well for:

- Content in multiple European languages
- Translation between languages
- Multilingual communication
- Understanding cultural context

**Example prompts:**

```other
Translate this product description to German, French, and Spanish.
```

```other
Write this email in Danish with a professional tone.
```

```other
Review this French text and suggest improvements.
```

## Why choose Le Chat?

**Best for:**

- EU data residency preference (Mistral is based in France)
- Multilingual content and translation
- Code and technical work (Codestral)
- Users who want model flexibility
- Fast responses (Mistral Small)

**Consider other tools for:**

- Microsoft 365 integration (use M365 Copilot)
- Google Workspace integration (use Gemini)
- Very long documents (use Claude or Gemini)
- Maximum ecosystem support (use ChatGPT)

## Common issues

**"Responses are too short"**

- You might be using Mistral Small — switch to Large
- Ask explicitly for more detail
- Update your Agent instructions

**"The model keeps changing"**

- Each conversation can have a different model
- Set your preferred model in your Agent
- Or select manually at conversation start

**"I'm not sure which model to use"**

- Default to Mistral Large for quality
- Use Small for speed on simple tasks
- Use Codestral specifically for programming

## Settings to check regularly

Every few months, verify:

- Training opt-out is still disabled
- Your Agents still match your needs
- You're using appropriate models for your tasks

## Next steps

1. Complete the setup checklist above
2. Create at least one Agent for your main work type
3. Test with a multilingual task if relevant to your role
4. Read "Your first prompt" for tips on getting good results
