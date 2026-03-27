---
title: Google Gemini Setup Guide
url: https://ai-playbook.danishagro.com/get-started/getting-started-checklist/configuring-your-ai-tool/gemini
section: Get Started > Configuring Your AI Tool
---

# Google Gemini Setup Guide

**Get Google Gemini configured for work use.**

Gemini is Google's AI assistant. Its strength is integration with Google Workspace — if your team uses Google Docs, Gmail, or Drive, Gemini can work directly with that data.

## Quick setup checklist

- [ ] Configure privacy settings
- [ ] Set up activity auto-delete
- [ ] Create a Gem for your work role
- [ ] Test Google Workspace integration (if applicable)

## Step 1: Configure privacy settings

Gemini saves your conversations to your Google Account by default. Adjust this for work use.

1. Go to [**gemini.google.com**](http://gemini.google.com)
2. Click the menu icon (three lines, top left)
3. Go to **Settings** → **Privacy**
4. Under **Gemini Apps Activity**:
   - Turn OFF: **"Save Gemini Apps Activity"** to stop saving entirely
   - Or set **Auto-delete** to remove conversations after 3, 18, or 36 months

**What this does:** Prevents Google from storing your Gemini conversations in your Google Account activity. Google may still temporarily process your prompts.

### Additional privacy settings

While in Settings, also review:

- **Apps & services:** Control which Google services Gemini can access
- **Extensions:** Manage what external tools Gemini can use

## Step 2: Set up auto-delete (recommended)

If you want some history but not permanent storage:

1. Go to **Settings** → **Privacy** → **Gemini Apps Activity**
2. Click **Auto-delete**
3. Choose: 3 months, 18 months, or 36 months
4. Confirm

**Recommendation:** 3 months gives you enough history to reference recent work while limiting long-term data storage.

## Step 3: Create Gems (Custom Assistants)

Gems are custom AI assistants you create for specific purposes — similar to ChatGPT's Custom Instructions but more flexible.

### Creating a Gem

1. Click **"Gem manager"** in the sidebar
2. Click **"New Gem"**
3. Give it a name and instructions
4. Save

### Example Gems

**Marketing Assistant:**

```other
Name: Marketing Assistant

Instructions: You help with marketing content for Danish Agro,
an agricultural company. Our audience is farmers and agricultural
professionals. Use clear, practical language. Avoid jargon.
Focus on benefits and practical value. Match our professional
but approachable brand voice.
```

**Research Helper:**

```other
Name: Research Helper

Instructions: You help research topics related to agriculture,
farming practices, and industry trends. Provide balanced,
factual information. Cite sources when possible. Flag when
information might be outdated. Summarise findings clearly.
```

**Writing Editor:**

```other
Name: Writing Editor

Instructions: You help improve written content. Focus on clarity,
conciseness, and professional tone. Suggest improvements without
changing the core message. Point out grammatical issues and
awkward phrasing. Keep the author's voice intact.
```

### Using Gems

1. Start a new conversation
2. Select your Gem from the dropdown
3. The Gem's instructions apply to the entire conversation

## Step 4: Google Workspace integration

If your organisation uses Google Workspace, Gemini can access your Docs, Gmail, Drive, and more.

### What Gemini can do with Workspace

**In Gmail:**

- Summarise email threads
- Draft replies
- Search across emails

**In Google Docs:**

- Summarise documents
- Help write and edit
- Answer questions about content

**In Google Drive:**

- Find files
- Summarise documents
- Compare versions

**In Google Meet:**

- Summarise meetings
- Generate notes
- Track action items

### Setting up Workspace access

1. Go to **Settings** → **Extensions**
2. Enable **Google Workspace**
3. Grant necessary permissions
4. Test: "Summarise my recent emails about [topic]"

**Note:** Gemini only accesses data you already have permission to see.

## Managing conversation history

### View history

- Click a conversation in the sidebar to return to it
- Use search to find specific conversations

### Delete conversations

- Click conversation → Click **"..."** → **Delete**

### Bulk management

- Go to [**myactivity.google.com**](http://myactivity.google.com)
- Find Gemini activity
- Delete individual items or in bulk

## Context window

Gemini has a large context window — up to 1 million+ words with Gemini 1.5 Pro. This makes it excellent for:

- Very long documents
- Multiple files at once
- Extended conversations
- Complex analysis

**Practical limits:**

- Free version has smaller limits
- Response time may increase with very large contexts
- For most work tasks, you won't hit the limit

## Conversation tips

Gemini adapts its style based on your prompts. Guide it by being specific:

```other
Explain this in simple terms for someone new to the topic.
```

```other
Give me a professional, formal response suitable for a report.
```

```other
Be creative and suggest unusual ideas.
```

```other
Keep your response under 200 words.
```

## Common issues

**"Gemini can't access my Google Docs"**

- Check that Workspace extension is enabled in Settings
- Verify you're signed in with the right Google account
- Ensure you have permission to access those documents

**"Responses are too generic"**

- Use a Gem with specific instructions
- Provide more context in your prompts
- Be specific about your audience and purpose

**"I'm concerned about privacy"**

- Disable Gemini Apps Activity entirely
- Or set strict auto-delete (3 months)
- Use only for non-sensitive tasks
- Consider other tools for confidential work

## Why choose Gemini?

**Best for:**

- Google Workspace users (Docs, Gmail, Drive)
- Very long document analysis
- Multilingual content
- Research with web access
- Visual tasks (image understanding)

**Consider other tools for:**

- Microsoft 365 integration (use M365 Copilot)
- Maximum privacy (use Claude)
- Most widely supported option (use ChatGPT)

## Settings to check regularly

Every few months, verify:

- Privacy settings haven't reset
- Auto-delete is still configured
- Gems still match your needs
- Extension permissions are appropriate

## Next steps

1. Complete the setup checklist above
2. Create at least one Gem for your main work type
3. Test Workspace integration if you use Google services
4. Read "Your first prompt" for tips on getting good results
