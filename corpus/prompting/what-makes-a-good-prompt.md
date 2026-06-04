---
title: What makes a good prompt
url: https://ai-playbook.danishagro.com/prompting/what-makes-a-good-prompt
section: Prompting
---

# What makes a good prompt

You do not need to learn prompt engineering. You need to know what you want.

---

Imagine someone walks into the room and shouts one word at you:

**PRINTER.**

What are you supposed to do with that? Is it a question? An instruction? Are you supposed to find a printer, buy one, fix one, connect it to the network? You have no idea. The word alone tells you nothing.

That is exactly how AI experiences a prompt without context. AI is not stupid. It just cannot answer a question it does not understand.

Most weak AI responses come down to this single problem: the prompt did not give AI enough to work with. Fix that, and the quality of your results changes overnight.

---

## You do not need to learn prompt engineering

A few years ago, prompt engineering was a real discipline. The models were literal. If you did not phrase things precisely, you got useless answers. Specialists charged real money to write prompts for other people.

That era is over.

Modern AI tools are trained to understand what you mean, not just what you write. If you talk to them the way you would brief a colleague, casually, directly, with a bit of context, they will fill in the gaps and deliver something useful.

Many of you are already doing this without thinking about it. That is the right instinct. You do not need to learn a new discipline. You just need to be clear about what you want.

---

## The four things every good prompt has

The prompt models you will read about next, FIXIT, CO-STAR, RISEN, use different acronyms, but they all cover the same four ideas. If you understand these four things, you can write a strong prompt with or without a model.

**Context**
Who are you? What is the situation? What background does AI need to understand the task? This is the single biggest lever. A prompt with context will outperform a prompt without context every time.

**Instruction**
What do you actually want AI to do? Write, summarise, analyse, compare, rewrite, translate, brainstorm. Be specific about the action, not just the topic.

**Example**
If you know what good looks like, show it. An example is worth more than a long description. "Write it like this" is faster and more accurate than trying to describe the tone in words.

**Tone and format**
Direct or friendly? Formal or casual? A list or a paragraph? Three sentences or three hundred words? If you do not choose, AI will choose for you, and the default is rarely what you wanted.

That is the whole thing. Context, instruction, example, tone and format. Everything else is variations on these four.

---

## A before-and-after example

Here is the same task written two ways.

**Without context:**

> Write something about our new product.

AI will produce something. It will be generic, bland, and probably useless. You will have to start over.

**With context:**

> Write a product description of no more than 80 words for our webshop. The product is a new feed solution for dairy farmers. Use a structure of benefit, application, call to action. The tone should be direct and grounded, no marketing language. Here is an example of a description we like: [paste example].

Same task. Completely different result. The second prompt takes thirty seconds longer to write, and it saves you ten minutes of iterating on the output.

---

## Iterate, do not aim for perfect

A lot of people freeze on the first prompt. They try to get it perfect before they hit enter. That is the wrong instinct.

A good prompt is rarely the first one. It is the third or fourth. You write something, see what comes back, adjust, ask again. Each round teaches you what AI understood and what it missed.

The fastest way to a great result is not a perfect first prompt. It is a decent first prompt followed by quick adjustments.

Think of it as a conversation, not a search query. Searches are one-shot. Conversations are back-and-forth. AI works better in conversation.

---

## A note on roles

You may have learned to start prompts with *You are a world-leading marketing expert* or *Act as a senior lawyer*. That advice made sense a few years ago. On today's models, it usually adds nothing.

Here is why.

When you chat with Copilot, ChatGPT, Claude or Gemini, the provider has already set a system prompt behind the scenes. It defines tone, safety, and behaviour. Your *You are an expert* line is not a system role. It is just a sentence in the conversation. The model registers it as *the user wants a professional answer about marketing* — which it would have understood anyway from a clearly written task.

Modern models are also more literal. They take you at your word and do not infer what you did not say. A vague role like *You are a world-leading expert* gives the model no concrete information about scope, audience, format or success criteria. A clear task with context, audience and format gives it everything it needs.

### When a role still helps

Roles still matter in two situations:

- When you build an assistant. Custom GPTs, Copilot Agents, Gemini Gems and API integrations all use a real system prompt. Defining a role there is one of the strongest tools you have, because it shapes every response in the session.
- When the role adds real information. *Explain this for a colleague with no technical background* is useful because it tells the model who the reader is. *You are a world-leading neurosurgeon* is not useful when the task is clear on its own.

### What to do instead in everyday chat

Skip the role. Use the same space to be specific about:

- Who the reader is
- What format and length you want
- What tone fits
- What good looks like, ideally with an example

This is what FIXIT, CO-STAR and RISEN already teach. They have not become less relevant. The new models reward precision more than before, which makes these models more useful, not less.

---

## The bottom line

The best prompt is a clear thought.

If you know what you want, who it is for, and what good looks like, you can phrase the prompt ten different ways and still get a strong answer. If you do not know what you want, no model and no technique will save you.

So use AI the way you would use a colleague. Write naturally. Be specific about what you want. Iterate if the first answer is not right.

AI will meet you halfway. Your job is to know what you want.

---

## Ready for a framework?

The principles above are enough for most everyday tasks. But when you need consistency, when the task is complex, or when you want to bring a colleague into the same approach, a model helps.

Three models are worth knowing:

- **FIXIT** for tasks where format and tone matter most
- **CO-STAR** for external communication with a specific audience
- **RISEN** for process-based tasks that need a structured result

Pick one to learn first. The rest you can pick up as you need them.
