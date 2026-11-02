---
title: "From November 12, Claude bans services that run other people's requests through a Claude subscription. Here's who that hits"
date: 2026-11-02
summary: "Anthropic's new Usage Policy, which takes effect November 12, adds an explicit ban on reselling or proxying Claude access, including services that route requests through consumer subscriptions. Using your own Claude plan yourself is fine. Apps that ask you to sign in with your Claude account to power their product are the ones at risk."
source: "https://www.anthropic.com/legal/aup"
sourceName: "Anthropic Usage Policy"
related: [["/is-openclaw-safe/","Is OpenClaw safe?"],["/openclaw-vs-hermes-agent/","OpenClaw vs Hermes Agent"],["/chatgpt-vs-claude-for-business/","ChatGPT vs Claude for business"],["/how-much-does-an-ai-agent-cost/","How much does an AI agent cost?"]]
---

## What happened

Anthropic's updated **Usage Policy takes effect November 12, 2026** ([Anthropic](https://www.anthropic.com/news/2026-usage-policy-update)). Under "Do Not Abuse Our Platform", it now bans using Anthropic's products to "resell, proxy, or otherwise provide access to Claude through unauthorized means, including services that route requests through consumer subscriptions or misrepresent the product or client being used." The same list adds a ban on using "stolen, fraudulent, or unauthorized payment methods" to evade payment ([Anthropic Usage Policy PDF](https://www-cdn.anthropic.com/files/4zrzovbb/website/6ae2f5bb8675bcd9fac006125817ba1393b396e4.pdf)).

Anthropic's announcement post doesn't mention the subscription clause; it's only in the policy text, and it's now being flagged by policy trackers ([SW Architect](https://www.swarchitect.net/en/claude-usage-policy-2026-10/)).

The Claude Code docs already spell out the rule in more detail. Subscription sign-in "is intended exclusively for purchasers of Claude Free, Pro, Max, Ultra, Team, and Enterprise subscription plans," and Anthropic "does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users." Developers may not "collect, store, or intermediate" Claude credentials, and Anthropic says it may enforce this "without prior notice" ([Claude Code Docs](https://code.claude.com/docs/en/legal-and-compliance)). Policy violations can lead to warnings, reduced usage, suspension or termination ([SW Architect](https://www.swarchitect.net/en/claude-usage-policy-2026-10/)).

## Our take

**Your own Claude plan, used by you, is fine. Sharing it or letting an app ride on it is not.** The cheap trick of "pay one $20 or $100 subscription and plug it into everything" is now explicitly against the rules, and the penalty can land on your account.

**For founders and business leaders:**

- **Don't share one Claude login across the team.** Get each person their own seat on a Team or Enterprise plan, or use the API with its own billing.
- **If you built a tool on Claude, use an API key, not someone's Claude.ai login.** Customers can bring their own API key or subscription only through Anthropic's own sign-in flow, never by handing your app their password or session.
- **Ask your vendors one question:** "Does your product run on our Claude subscription or on your own API account?" If it's ours and they log in for us, that's the pattern Anthropic just banned.

**For everyday users:** be wary of any website or agent that asks you to paste your Claude login or session to "unlock" Claude cheaply, or that sells Claude access below Anthropic's prices. If you run an open-source agent on your own computer with your own Claude plan, Anthropic hasn't published a clear answer on every setup yet, so check the tool's own guidance before November 12 and keep an API key as your backup.

*Disclosure: AgentStackWatch is run with help from AI assistants, and we test ChatGPT, Claude, Gemini and Grok Bot. Nobody named here paid for or reviewed this post.*
