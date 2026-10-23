---
title: "ChatGPT's Oct 20 update: locked chats with a PIN, team Slides, and Pro agents that work in parallel"
date: 2026-10-23
summary: "On October 20 OpenAI added locked chats (hide private conversations behind a 4-digit PIN, but it is not encryption and a PIN reset deletes them), ChatGPT Slides for team presentations, and a GPT-6 Pro update that runs several agents on one task. Here's what each one does, who gets it, and what to do."
source: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
sourceName: "OpenAI Help Center"
related: [["/best-ai-agent-for-personal-use/","Best AI agent for personal use"],["/is-chatgpt-plus-worth-it/","Is ChatGPT Plus worth it?"],["/claude-cowork-vs-chatgpt-work/","Claude Cowork vs ChatGPT Work"],["/chatgpt-vs-gemini/","ChatGPT vs Gemini"]]
---

## What happened

OpenAI's ChatGPT release notes list several changes under October 20, 2026 ([OpenAI Help Center](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)). Three matter most if you use ChatGPT as a personal assistant or at work.

### 1. Locked chats (everyone)

You can now "lock" a conversation. It stays in your account but disappears from your regular chat history, pinned chats and search. You open it from Projects > Locked chats with a 4-digit account PIN, or Face ID / Touch ID / your phone's unlock on supported phones ([OpenAI help article](https://help.openai.com/en/articles/20001411-using-locked-chats-in-chatgpt)). To lock one, open the chat's "•••" menu and pick Lock chat. TechCrunch reports OpenAI pitches it for moments like handing your phone to a friend, or planning a surprise ([TechCrunch](https://techcrunch.com/2026/10/20/chatgpt-now-lets-you-lock-your-chats/)).

What OpenAI says it does **not** do:

- It is not end-to-end encryption or a separate encrypted vault.
- It doesn't change how long OpenAI keeps the chat, or your "Improve the model for everyone" setting.
- It doesn't remove anything ChatGPT already remembered before you locked the chat.
- **Resetting a forgotten PIN permanently deletes all your locked chats**, memories stored only in them, and files protected only by the old PIN. OpenAI Support can't recover them, and a workspace admin can't reset your PIN either.

More fine print from the help article: temporary chats, group chats, chats with scheduled tasks or meeting recordings, and Codex chats can't be locked; locked chats on Enterprise and Edu workspaces still show up in the company's compliance logs; ads can still appear in locked chats if ads are on for your account; and anyone who can open a locked chat can still copy what's in it ([OpenAI help article](https://help.openai.com/en/articles/20001411-using-locked-chats-in-chatgpt)). Press coverage lines up with this: [Engadget](https://www.engadget.com/2292365/chatgpt-now-lets-you-lock-sensitive-chats-behind-a-pin/), [Android Authority](https://www.androidauthority.com/chatgpt-rolls-out-locked-chats-3725766/) and, on October 23, [Fortune](https://fortune.com/2026/10/23/chatgpt-locked-chats-pin-privacy-openai/).

**Who gets it:** OpenAI's help article lists Free, Go, Plus, Pro, Business, Enterprise and Edu, on the web, iOS, Android and the new ChatGPT desktop app for Mac and Windows. It is a gradual rollout, so you may not see "Lock chat" yet. (The main release-notes page names only Free, Go, Plus and Pro; the help article and TechCrunch list the workspace plans too.)

### 2. ChatGPT Slides (teams)

ChatGPT can now build a presentation from a conversation, files or an outline, or copy the style of an example deck you share. You can edit text, images, shapes and charts yourself or ask ChatGPT to change them, invite teammates to edit the same deck live and comment, present from inside ChatGPT, or export to PowerPoint, PDF or Google Slides on the web. It is rolling out to eligible **Pro, Business and Enterprise** users who have Space access. To start, ask ChatGPT in Work to create a presentation in Space ([OpenAI Help Center](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)). Plus is not on the list.

### 3. GPT-6 Pro: faster, and several agents on one task

In the chat tab, GPT-6 Pro now gives faster responses, uses plugins and tools better, and can run **multiple agents that each take a different part of a task at the same time**. You can watch their progress in the conversation and open each finished piece to see what that agent did. It is rolling out to eligible **Pro** users; in company workspaces it depends on admin settings ([OpenAI Help Center](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)).

Smaller items in the same notes: new voices and a new voice model (GPT-Live-1.1) in ChatGPT Voice, an application program giving approved university life-science labs up to 30 free Business seats for 12 months, and no fixed cap on how many Sites Plus and Pro users can create ([OpenAI Help Center](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)).

**Still unknown:** OpenAI doesn't say how many people have each feature yet or when the gradual rollouts finish. It doesn't say how much extra usage the parallel Pro agents consume, or whether they are cheaper or slower per task than before. We haven't tested any of this ourselves.

## Our take

**Locked chats are a "someone looks over my shoulder" feature, not a privacy feature.** It's useful, and honestly overdue now that people use ChatGPT for health, money and relationship questions. But OpenAI itself says it doesn't change what is stored, how long, or whether chats can be used for training. The real privacy controls are still your memory and "Improve the model" settings and Temporary Chat. Don't put something in a locked chat that you wouldn't be comfortable having on OpenAI's servers.

**The PIN reset is the trap.** Forget the PIN and your only way back in is a reset that wipes everything locked. Treat the PIN like a password: store it in your password manager.

**Slides and parallel agents are about Pro and company plans, not the average user.** If you're on Free, Go or Plus, locked chats is the only one of the three you will probably get. For founders, Slides inside ChatGPT is a real step toward "one place for the whole job", but it competes with tools you may already pay for, and we'd want to see how it handles your own brand template before trusting it with a client deck.

**What to do now:**

1. **Everyone:** if you share a phone, laptop or screen, try locking one test chat first. Set a PIN you'll remember and save it somewhere safe before locking anything important.
2. **Business owners:** remember that admins can't unlock these chats or reset PINs, but compliance logging still applies on Enterprise and Edu. Tell your team that "locked" does not mean "private from the company".
3. **Pro and Business users:** try Slides on a low-stakes internal deck, and give the parallel Pro agents one big, splittable job (for example, research five competitors) before relying on them for client work. Check your usage afterwards.
4. **Everyone else:** don't upgrade just for this. If you were weighing Plus vs Pro, our [Is ChatGPT Plus worth it?](/is-chatgpt-plus-worth-it/) guide covers what each tier actually gets you.
