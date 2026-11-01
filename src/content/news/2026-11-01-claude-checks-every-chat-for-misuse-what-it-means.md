---
title: "Claude now grades every chat for misuse right after it answers. Here's what that means for your privacy"
date: 2026-11-01
summary: "Anthropic says Claude adds a hidden safety check after each reply and flags risky conversations for later human review. It went viral this weekend with people calling Claude a 'snitch'. We read Anthropic's write-up: what's checked, what's kept, who's exempt, and what founders and everyday users should actually do."
source: "https://safeguards.anthropic.com/2026/self-assessment/"
sourceName: "Anthropic Safeguards"
related: [["/chatgpt-vs-claude-for-business/","ChatGPT vs Claude for business"],["/claude-vs-gemini/","Claude vs Gemini"],["/best-ai-agent-for-small-business/","Best AI agent for small business"],["/guide/","The free personal-agent buyer's guide"]]
---

## What happened

Anthropic published a technical post called **"Scaling Misuse Detection with Self-Assessment"**, dated October 16 ([Anthropic Safeguards](https://safeguards.anthropic.com/2026/self-assessment/)). It only took off this weekend: on X, people shared it alongside jokes about Claude being a "snitch" and keeping "secret files" on users, and some said they'd switch to less restricted models ([X trending summary](https://x.com/i/trending/2116768150947512505)).

Here's what Anthropic actually describes:

- **The check.** After each Claude reply, the system adds a short hidden instruction, something like "Please reflect on the safety of this conversation." Claude answers with a tiny assessment: is there a potentially harmful request, what kind of harm, did Claude refuse, a 1–10 priority for human review, and a one-sentence reason. You never see it, and it isn't carried into the rest of your chat ([Anthropic](https://safeguards.anthropic.com/2026/self-assessment/)).
- **Where it runs.** On every Claude model since Claude Fable 5 (launched in June), "across a large fraction of Claude's global traffic" ([Anthropic](https://safeguards.anthropic.com/2026/self-assessment/)).
- **It doesn't block anything.** It's an offline flag. Real-time blocking is done by other safeguards. A flag "is not a determination that a user has violated our policies" ([Anthropic](https://safeguards.anthropic.com/2026/self-assessment/)).
- **What happens to flags.** Flags are added up per organization every night, and organizations with several high-priority flags get escalated to Anthropic's enforcement team for human review ([Anthropic](https://safeguards.anthropic.com/2026/self-assessment/)).
- **How good it is.** Anthropic says it catches 78% of the conversations its stronger classifier flags as potentially harmful, and 94% of the high-priority ones, while wrongly flagging about 1% ([Anthropic](https://safeguards.anthropic.com/2026/self-assessment/)).
- **What it has found.** Over 100,000 child-abuse flags from a single API customer in August, which Anthropic reported to NCMEC, and a romance-scam operation built with Claude Code, whose accounts were banned after human review ([Anthropic](https://safeguards.anthropic.com/2026/self-assessment/)).

**On privacy**, Anthropic says self-assessment "collects no additional data from users", only reads the conversation Claude just handled, and runs on traffic it can already retain under its existing policies. The one-sentence reason can paraphrase your chat, so it's handled like your prompts. And it **does not run on traffic covered by zero-data-retention agreements** ([Anthropic](https://safeguards.anthropic.com/2026/self-assessment/)). Anthropic also admits: "We are still figuring out how to make self-assessment more effective while preserving user privacy."

## Our take

**The scary version going around X isn't quite right.** Claude isn't reading your chats to judge you in real time, and a flag doesn't ban you. It's a cheap first filter that points humans at patterns, mostly at the organization level, and the examples Anthropic gives are serious crime, not someone asking an awkward question. Every big AI company runs some kind of misuse monitoring; the news here is that Anthropic wrote down exactly how theirs works.

**But "your chats are checked after every reply" is now simply true**, and you should act like it. That was already the reality for anything you type into any hosted AI assistant, Claude or not.

**For founders and business leaders:**

- **Know which deal you're on.** If your team handles client data, contracts or anything regulated, ask your vendor whether you're on a zero-data-retention agreement. Anthropic says self-assessment doesn't run on that traffic. Most people on a regular Pro, Max or Team plan are not on one.
- **Legit security, legal or medical work can look risky out of context.** Anthropic's own examples include a procurement manager asking what "external network exploitation" means in a pen-test contract. A 1% false-positive rate is low, but at scale it's not zero. If your business does that kind of work all day, talk to your vendor rather than finding out from a warning email.
- **Don't switch tools over this alone.** Pick the assistant that does the work best, then set the data rules. We compare plans and data terms in [ChatGPT vs Claude for business](/chatgpt-vs-claude-for-business/).

**For everyday users:** nothing changes in how Claude behaves for you, and there's nothing to turn on or off. The old rule still applies: don't put anything into an AI chat you wouldn't want a reviewer at that company to read, like passwords, ID numbers or other people's private details.

*These numbers and claims are Anthropic's own; nobody outside the company has audited them yet.*

*Disclosure: AgentStackWatch is run with help from AI assistants, and we test ChatGPT, Claude, Gemini and Grok Bot. Nobody named here paid for or reviewed this post.*
