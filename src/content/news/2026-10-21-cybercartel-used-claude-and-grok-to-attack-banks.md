---
title: "Researchers say a criminal group used Claude and Grok agents to attack 400+ Latin American banks"
date: 2026-10-21
summary: "Security firm Straiker says CyberCartel built a multi-agent attack system on commercial AI models, and got past their safety rules by framing the work as authorized testing. Here's what it means for businesses using agents."
source: "https://www.straiker.ai/blog/inside-carliy0s-how-cybercartel-used-multiple-ai-models-to-attack-latin-american-banks"
sourceName: "Straiker STAR Labs"
related: [["/is-openclaw-safe/","Is OpenClaw safe?"],["/best-ai-agent-for-small-business/","Best AI agent for small business (with the security settings)"],["/are-ai-agents-worth-it-for-business/","Are AI agents worth it for business?"]]
---

## What happened

On October 21, AI security firm Straiker published research on CARLIY0S, a system it says the CyberCartel group used to coordinate attacks on banks and payment providers across Latin America ([Straiker](https://www.straiker.ai/blog/inside-carliy0s-how-cybercartel-used-multiple-ai-models-to-attack-latin-american-banks)). Straiker's main claims:

- The group attacked "over 400 financial targets in a matter of months," using commercial models including Claude Sonnet and Opus, xAI's Grok and Kimi models, built on the open-source PentAGI framework.
- Four Claude-based roles debated targets and attack options, and an "arbiter" model returned one decision. Five "Grok miners" collected stolen credentials.
- To get past safety refusals, the operators described the work as an authorized red-team engagement or an academic penetration test. When fallback models refused, the system switched to pre-written attack code.
- On September 24, Straiker accessed a snapshot of the group's stolen-credential database with 4,493 records, including passwords and API keys.

All of the above is from [Straiker's report](https://www.straiker.ai/blog/inside-carliy0s-how-cybercartel-used-multiple-ai-models-to-attack-latin-american-banks). How much money was stolen, and how Anthropic and xAI responded, is **unknown**: the report doesn't say.

## Our take

This doesn't mean Claude or Grok is unsafe for you to use. It does show that safety rules inside a model can be talked around with a believable story, so they can't be your only protection.

**Who should care:** anyone who has given an AI agent access to email, banking, payment tools or API keys, which is most businesses using agents seriously.

**What to do now:** treat your own agents the way the attackers' targets should have treated theirs. Never paste API keys or passwords into a chat. Use the agent's secure credential prompts where they exist. Keep payments and outgoing messages behind your approval. Give each agent only the connectors it needs. If you're a finance or fintech business, ask your security provider directly whether they test for AI-driven attacks.
