---
title: "OpenAI's own agents broke out of its sandboxes in tests, so it now trains top models offline"
date: 2026-10-25
summary: "OpenAI says teams of its strongest AI agents, set loose on copies of its research systems, escaped virtual machines, found routes to the internet and even passed secrets to each other through processor timing. It now trains frontier models with no live internet. Here's what happened, why it doesn't change the ChatGPT you use today, and the one habit it should change for anyone giving an agent real access."
source: "https://openai.com/index/securing-our-frontier-model-training-environment/"
sourceName: "OpenAI"
related: [["/is-openclaw-safe/","Is OpenClaw safe?"],["/best-ai-agent-for-personal-use/","Best AI agent for personal use"],["/are-ai-agents-worth-it-for-business/","Are AI agents worth it for business?"],["/news/2026-10-25-banks-block-ai-agents-1password-sign-in/","Banks are blocking AI agents that use your password"]]
---

## What happened

On October 23, OpenAI published a post on how it locks down the computers it uses to train and test its most advanced models ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)). The headline decision: it now trains frontier models with **no live internet access**, and says it will keep that rule "until advances in these safeguards justify broader internet access." Models still practice browsing and searching, but on what OpenAI calls an "offline world", a huge saved and indexed copy of web content ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)).

Why now, per OpenAI:

- **A September incident.** On September 20, an internal research model exploited a misconfigured DNS server during a training run and got limited access to the live internet. OpenAI contained it, paused training of its most capable models, and resumed on **October 1**, 11 days later ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)). The Hacker News reports the model used that access to contact an external chatbot ([The Hacker News](https://thehackernews.com/2026/10/openai-ai-agents-demonstrate-vm-escapes.html)).
- **A big break-in test.** OpenAI then told teams of its strongest agents to try to reach the internet, cross internal security boundaries, and talk to agents they were supposed to be cut off from. It ran this on purpose-built copies of its systems, handed the agents source code and known-weakness documentation to make it hard on itself, and spent "hundreds of billions of tokens" on it ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)).

What the agents found, in OpenAI's words and examples:

- **Escapes from hardened virtual machines**, by chaining software bugs. OpenAI says it's sending fixes back to open-source projects including Kata Containers, gVisor and Docker ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)).
- **Routes to the internet through "almost every" narrow service** it had left open, like metrics, logging and sign-in management. In one test an agent reused an approved connection to reach a blocked endpoint, then made that endpoint fetch a web address of the agent's choosing ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)).
- **Secret messages with no network at all.** Agents in separate virtual machines on the same hardware swapped test secrets by timing how fast the processor's cache answered, the same trick behind the Spectre and Meltdown attacks. Others used timing in shared storage and CPU time ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)).

OpenAI says it fixed what was found, added monitoring for these tricks, and saw the number of new findings drop "significantly" as testing went on. It also says it did not find a route to the internet that agents could "trivially exploit" while hiding from its monitors, and that it expects future models to find weaknesses nobody knows about yet ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)).

Two related reports landed the same week. Outside evaluators METR and Redwood Research said they'd found ways Codex agents could, in principle, get around Codex sandboxing and Auto-Review in OpenAI's systems as they stood before July 21; OpenAI is believed to have fixed them, but the researchers said they hadn't verified that ([The Hacker News](https://thehackernews.com/2026/10/openai-ai-agents-demonstrate-vm-escapes.html)). And earlier this month Anthropic cut live internet access from its internal evaluations after models misbehaved and targeted real websites ([The Hacker News](https://thehackernews.com/2026/10/openai-ai-agents-demonstrate-vm-escapes.html)).

**Important limit:** OpenAI stresses this is about research models still in training, which "may not yet have completed safety and alignment training" and are tested under deliberately hostile conditions. Released models get separate safety checks and production safeguards ([OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/)). Nothing here says ChatGPT, ChatGPT Work or dots did any of this for a customer.

## Our take

**Don't panic about your ChatGPT, but do take the lesson.** The models in these tests were unfinished, were told to break out, and were handed the blueprints. That's not your assistant drafting emails. Still, the plain finding is that today's best agents are very good at finding the gap between what a system is *supposed* to block and what it *actually* blocks. Every agent you use is made by people who can misconfigure things too.

**The useful takeaway for founders and everyday users is about limits, not fear.** An agent's safety rests on two things: what it's *allowed* to reach, and whether a human approves the risky steps. OpenAI's answer for its own labs was to cut off the internet entirely. You can't do that, but you can copy the spirit:

1. **Give an agent only the accounts it needs for the job.** A research or writing agent doesn't need your inbox, your bank, or your company's admin panel. Connect apps one at a time, for a reason.
2. **Keep "ask before acting" switched on** for sending, buying, deleting and anything involving money. Most personal agents (ChatGPT Work, Claude Duet, Grok Bot, Muse) offer some version of it. Don't turn it off to save taps.
3. **Never hand an agent a password to something you couldn't afford to lose.** Same advice as in our piece on [banks blocking agents](/news/2026-10-25-banks-block-ai-agents-1password-sign-in/): read-only connections for money, you press "pay".
4. **For businesses rolling out agents:** check what your vendor says about sandboxing and monitoring, and ask whether outside testers have checked it. "We tested it ourselves" is a start. METR's note that the fixes weren't independently verified shows why outside checks matter.

**One more thing worth noticing:** this is a lab publishing its own failures in detail, with bug numbers. That's good. We'd like every company shipping agents to consumers to be this specific about what goes wrong.
