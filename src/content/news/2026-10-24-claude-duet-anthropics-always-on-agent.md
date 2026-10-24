---
title: "Claude Duet: Anthropic's always-on agent messages you first and asks before it acts"
date: 2026-10-24
summary: "On October 21 Anthropic opened a research preview of Claude Duet, a separate app where Claude briefs you every morning, works in its own cloud computer while you're away, and asks before it sends, pays, signs or deletes. It's US-only, Pro and Max plans, by waitlist. Here's what it does, what it can't do yet, and who should sign up."
source: "https://claude.com/resources/articles/claude-duet"
sourceName: "Anthropic"
related: [["/chatgpt-vs-claude-for-business/","ChatGPT vs Claude for business"],["/best-personal-ai-agent-for-founders/","Best personal AI agent for founders"],["/claude-cowork-vs-chatgpt-work/","Claude Cowork vs ChatGPT Work"],["/grok-bot-review/","Grok Bot review"]]
---

## What happened

On October 21, 2026 Anthropic opened a research preview of **Claude Duet**, a new app where Claude works as a "proactive agent": it comes to you with what needs your attention, does tasks you hand it, keeps working when you step away, and checks with you before it acts on your behalf ([Anthropic](https://claude.com/resources/articles/claude-duet)). Anthropic says it built Duet "for professionals and small business owners with more on their plates than they can track." Reuters, TechCrunch and Anadolu Agency all covered the launch as Anthropic's answer to OpenAI's dots and Meta's Muse, which launched in September ([Reuters via Investing.com](https://www.investing.com/news/stock-market-news/anthropic-unveils-claude-duet-ai-agent-app-4964042), [TechCrunch](https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/), [Anadolu Agency](https://www.aa.com.tr/en/americas/anthropic-launches-claude-duet-ai-agent-to-rival-metas-muse-openais-dots/4096538)).

### What it does

- **A morning brief.** Each morning it looks across your connected apps (email and calendar first), picks what most needs you, and can start first steps like drafting replies for you to review ([Claude Help Center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)).
- **It messages you, not the other way round.** It checks your connected accounts **every few hours** (Anthropic says checking nonstop would burn through your plan's limits) and only pings you when something needs you. You can tell it what you want to hear about and how often ([Anthropic](https://claude.com/resources/articles/claude-duet)).
- **One ongoing thread.** You text or send voice messages in one main thread, and can open separate channels per topic that share the same memory. A Tasks tab tracks what it's working on; finished files (research briefs, financial models, slide decks, dashboards) land in a Make tab ([Claude Help Center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)).
- **Its own computer in the cloud.** Duet has a virtual machine with its own browser, so your laptop or phone can be off while it works ([Anthropic](https://claude.com/resources/articles/claude-duet)).
- **Your existing Claude setup carries over:** memory, skills and connected apps. Anthropic says it can use the 6,000+ connectors and plugins in the Claude Marketplace; examples it gives include Gmail, Slack, QuickBooks, Stripe invoices, Gusto payroll, HubSpot, Docusign, Canva and Shopify ([Anthropic](https://claude.com/resources/articles/claude-duet)).
- **Buying things.** It can pay with Stripe's Link wallet or Shopify's Shop Pay. It asks before each purchase and each purchase uses a one-time card, so your real card number isn't shared ([Claude Help Center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)). Signing in to sites with logins saved in 1Password is listed as "coming soon" ([Anthropic](https://claude.com/resources/articles/claude-duet)).

### The safety rules

- **It asks first** before it sends a message, makes a payment, signs a document or deletes anything, showing you exactly what it's about to do. If you can't approve right away, it finishes the rest and brings the approval back later ([Claude Help Center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)).
- **Off-limits even with your approval:** trading securities, moving money between accounts, or accessing someone else's account.
- **Passwords:** Anthropic says Duet never directly sees your passwords or sign-in tokens. When a site asks for a password, you type it into a separate form on your device ([Anthropic](https://claude.com/resources/articles/claude-duet), [Claude Help Center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)).
- **A new leak filter** checks each message and is designed to refuse sharing card numbers and government ID. Health and personal-finance details only go out when you've explicitly told it to send them ([Anthropic](https://claude.com/resources/articles/claude-duet)).
- Anthropic openly says prompt injection (instructions hidden in emails or web pages) has no perfect defense, which is one reason consequential actions need your approval ([Claude Help Center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)).

### What it can't do yet

From Anthropic's own help article and launch post:

- You can't pick the model (it runs on Claude Opus 5.5) and you **can't watch or take over its browser**.
- Because it checks at intervals, **something urgent can arrive between checks**.
- It **doesn't make phone calls or send text messages** to other people. With your approval it can send email from accounts you've connected.
- **Microsoft 365 isn't available yet**, and some connectors such as Slack work with limits.
- Personal errands like booking tickets "aren't quite as strong", and it "might misread a thread or miscalibrate what's urgent."
- It lives in its own app, separate from the main Claude app, for now.

### Who can get it and what it costs

- **US only, Pro and Max plans, by waitlist.** Invitations go out in waves with no guaranteed date. It's not on Team or Enterprise plans yet; Anthropic says those come later ([Claude Help Center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)).
- **No extra charge during the preview.** It's included in Pro (listed at $20/month billed monthly, or $17/month billed annually) and Max (from $100/month) ([Claude pricing](https://claude.com/pricing), checked by our nightly tracker).
- **But it eats your usage limits.** Duet uses your plan's five-hour and weekly limits at the same rate as chats, and the background work (morning brief, check-ins) counts too, so you may hit limits sooner. People admitted to the preview get one full limit reset, usable until November 30, 2026 ([Claude Help Center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)).

**Still unknown:** when Duet leaves preview or reaches other countries, Team or Enterprise; what it will cost after the preview; how many Pro-plan check-ins and tasks fit in a typical week before you hit limits; and how good its "is this urgent?" judgment really is. We haven't been able to test it ourselves: it's US-only and waitlisted.

## Our take

**This is the most business-focused of the big personal agents.** OpenAI's dots, Meta's Muse and Grok Bot all pitch some version of "an assistant for your life". Anthropic is saying the opposite out loud: Duet is for running a small business, and it's weaker at errands. The examples are telling: unpaid Stripe invoices, Gusto payroll, HubSpot follow-ups, Docusign. If you're a founder or a small-business owner, this is aimed squarely at you.

**The approval rules are the right ones.** "Asks before it sends, pays, signs or deletes," one-time cards for purchases, no money transfers or trading at all, and passwords kept out of the chat. That's stricter than handing an agent your logins, and it's the direction banks and stores are pushing too (see our [Walmart story](/news/2026-10-22-walmart-lets-ai-agents-shop-for-you/)).

**The catch is usage limits.** An agent that checks your inbox every few hours is spending your Claude allowance while you sleep. On Pro that could crowd out your normal Claude use. If Duet becomes your daily driver, budget for Max, or tell it to check less often.

**And it's not for everyone yet.** No Microsoft 365, no texting or calls, US only, waitlist. If your business runs on Outlook and Teams, this isn't your agent today.

**What to do now:**

1. **US founders and small-business owners on Claude Pro or Max:** join the waitlist with the same email as your Claude account (access is tied to it). Before you're in, connect the apps you'd want it to watch inside Claude, since Duet inherits them.
2. **When you get in:** start with read-and-draft jobs (the morning brief, unpaid-invoice reminders, meeting prep) before anything that sends or pays. Tell it exactly what counts as urgent for you.
3. **Watch your limits for the first week.** Save the one-time limit reset (good until Nov 30) for a heavy week.
4. **Outside the US, or on Team/Enterprise:** you can't use it yet. If you need an always-on agent today, compare the options in our [best personal AI agent for founders](/best-personal-ai-agent-for-founders/) guide and our [ChatGPT vs Claude for business](/chatgpt-vs-claude-for-business/) breakdown.
