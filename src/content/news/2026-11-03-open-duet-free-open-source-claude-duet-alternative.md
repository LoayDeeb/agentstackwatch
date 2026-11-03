---
title: "Open Duet, a free open-source take on Claude Duet, passes 6,600 GitHub stars. Should you try it?"
date: 2026-11-03
summary: "Open Duet lets you set up a team of named AI agents with memory, schedules and approve-before-acting, running on your own computer or server with Claude, Codex, Gemini or a local model. It's free software, but you still pay for the AI, and it's marked experimental."
source: "https://github.com/Anil-matcha/open-duet"
sourceName: "Open Duet on GitHub"
related: [["/openclaw-vs-hermes-agent/","OpenClaw vs Hermes Agent"],["/is-openclaw-safe/","Is OpenClaw safe?"],["/best-free-ai-agent/","Best free AI agent"],["/best-personal-ai-agent-for-founders/","Best personal AI agent for founders"]]
---

## What happened

**Open Duet**, an open-source project that calls itself a "self-hosted alternative to Claude Duet," is trending on X and had **6,636 stars on GitHub** when we checked on November 3, 2026 ([GitHub](https://github.com/Anil-matcha/open-duet)). Claude Duet, Anthropic's always-on assistant, is still waitlist-only ([our coverage](/news/2026-10-24-claude-duet-anthropics-always-on-agent/)).

According to its README, Open Duet lets you ([Open Duet README](https://github.com/Anil-matcha/open-duet/blob/main/README.md)):

- **Create named agents and teams**, each with a job, a workspace and memory, where a lead agent can hand work to specialists.
- **Run routines** on a schedule or webhook. "A routine never approves an action by itself."
- **Choose how much freedom agents get**: Ask first, Accept edits, or Plan only.
- **Connect apps** like GitHub, Gmail and Google Calendar through your own Composio key, with changes waiting for your approval.
- **Pick the engine**: Claude Code, Codex CLI, Gemini CLI, Cursor, OpenRouter, or a local model through Ollama or LM Studio.

The software is free under the Apache 2.0 licence, but "Open Duet does not include an AI model or model subscription," so you pay your AI provider for usage. The desktop app runs from source and needs Node.js 22+ and uv; self-hosting is marked "Experimental; single owner." A separate hosted service, Suparagent, charges **$15, $49 or $99 a month** for compute, on top of your AI provider bill ([Open Duet README](https://github.com/Anil-matcha/open-duet/blob/main/README.md)).

## Our take

**The idea is right; the packaging is for tinkerers.** Named agents with a clear job, a schedule and a "check with me first" switch is exactly how a personal AI team should work. Open Duet proves you don't need to wait for Anthropic's waitlist to try it.

**For founders and business leaders:**

- **Don't run your business on it yet.** The project itself says it's in active development and experimental. Use it to prototype one routine (say, a Monday inbox summary) and see if a "team of agents" actually saves you time before you pay for a polished product.
- **"Free" isn't free.** You still pay for Claude, OpenAI or Gemini usage, and agents that run on a schedule burn through allowances quietly. Set a spending cap with your AI provider before you switch routines on.
- **Mind the Claude rules.** Anthropic's new policy from November 12 bans apps that route requests through someone's Claude subscription ([our explainer](/news/2026-11-02-claude-bans-reselling-subscriptions-third-party-apps/)). Running a tool yourself on your own computer is a different case from a vendor doing it for you, but Anthropic hasn't spelled out every setup, so an API key is the safer choice for anything important.

**For everyday users:** if "clone a GitHub repo and install Node.js" means nothing to you, skip this one. A ready-made assistant (ChatGPT, Claude, Gemini or Grok Bot) will get you 90% of the benefit today without the setup. If you do try it, leave it on **Ask first** and only connect your email once you trust it.

*Disclosure: AgentStackWatch is run with help from AI assistants, and we test ChatGPT, Claude, Gemini and Grok Bot. Nobody named here paid for or reviewed this post.*
