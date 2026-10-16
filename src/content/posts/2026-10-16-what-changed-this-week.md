---
title: "What actually changed in AI agents this week"
date: 2026-10-16
summary: "Issue #1, Oct 12–16, 2026: everyone shipped context compaction and human approvals, two personal agents shipped stability patches, and the download charts tell a different story than the hype."
draft: false
---

Fifteen tracked projects shipped releases between Oct 12 and Oct 16. Here's what matters, with a link for every claim.

## The big one

The theme this week wasn't a launch. It was plumbing. Four separate projects shipped work on the same two problems: long-running context and human approval gates.

- **Haystack 3.4.0** (Oct 15) added an experimental `ToolResultOffloadCompactor`, which moves old tool results into a store and leaves a reference in context instead of summarizing them away. It also dropped Python 3.10. [Release notes](https://github.com/deepset-ai/haystack/releases/tag/v3.4.0)
- **OpenAI Agents SDK 0.24.0** (Oct 15) now holds off automatic compaction while an approval is pending, and batches conversation session writes to stay under the API limit. [Release notes](https://github.com/openai/openai-agents-python/releases/tag/v0.24.0)
- **Google ADK 2.12.0** (Oct 13) added `require_confirmation` for human sign-off before workflow nodes run, plus an `after_tool_callback` to filter tool output before it reaches the model. Google says time to first model request in long sessions is 40% faster. [Release notes](https://github.com/google/adk-python/releases/tag/v2.12.0)
- **OpenClaw 2026.10.4** (Oct 16): manual `/compact` now lets the active run finish before compacting, instead of aborting it and dropping the pending request. [Release notes](https://github.com/openclaw/openclaw/releases/tag/v2026.10.4)

When four teams ship the same fix in one week, everyone has hit the same wall. Agents that run for hours lose their tool results or interrupt their own approvals. If your agent does long tasks, these are the release notes worth reading this week.

## Shipped

Dated releases picked up by the tracker's GitHub feed:

- **Pydantic AI 2.57.0** (Oct 16) added a `MetaProvider` for Meta Muse models. It also includes compatibility changes to realtime session handling and to how Skills read their invocation flags. Read the notes before you upgrade. [Release notes](https://github.com/pydantic/pydantic-ai/releases/tag/v2.57.0)
- **Mastra core 1.78.0** (Oct 16). [Release](https://github.com/mastra-ai/mastra/releases/tag/%40mastra/core%401.78.0)
- **Claude Agent SDK 0.2.168** (Oct 15). [Release](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.168)
- **Browser Use 0.13.13** (Oct 15). [Release](https://github.com/browser-use/browser-use/releases/tag/0.13.13)
- **CrewAI 1.15.28** (Oct 14). [Release](https://github.com/crewAIInc/crewAI/releases/tag/1.15.28)
- **DSPy 3.4.1** and **OpenHands 1.27.1** (Oct 12). [DSPy](https://github.com/stanfordnlp/dspy/releases/tag/3.4.1) · [OpenHands](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1)

Full list, with versions and dates, in the [Tracker](/tracker/).

## Broke

Both open-source personal agents shipped fix-up releases this week.

**Hermes Agent 0.22.2** (Oct 15) is the release 0.22.1 was supposed to be. Nous Research says 0.22.1 "was built from the wrong commit". It shipped unreleased gateway work and could leave the Microsoft Store app stuck on "Connecting". There's still a known issue: sessions that ran under the 0.22.1 gateway can't be deleted in 0.22.2. The release also fixes a bug where, after a reboot, the gateway could think it was already running and refuse to start. [Release notes](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.2)

**OpenClaw 2026.10.4** (Oct 16) is a stability patch for 2026.10.3 with no new features. The gateway no longer restarts itself after the computer sleeps or the clock jumps, and shutdown no longer hangs. It also closes an owner-impersonation path in Tlon group DMs. [Release notes](https://github.com/openclaw/openclaw/releases/tag/v2026.10.4)

If you run either one as an always-on assistant with your credentials attached, upgrade. The OpenClaw fix is a security fix.

## Got cheaper / pricing

I found no dated pricing changes from the products I track during Oct 12–16. Two recent cost stories are still worth knowing, and both are outside this week:

- **OpenAI Agents API, Sep 18–19.** OpenAI confirmed it overbilled for hosted containers, said it was preparing refunds, and marked the incident resolved on Sep 19. It started with a Reddit user reporting a $1,600 bill for idle sessions. That figure is the user's own report, not an audited bill. [awaited.dev write-up](https://awaited.dev/releases/agents-api-container-billing-bug/) · [Agents API launch, Sep 10](https://openai.com/index/introducing-the-agents-api/)
- **HAL leaderboard, Oct 5.** Princeton's HAL added a known-issue notice on its GAIA leaderboard: reported costs and token counts are overstated by exactly 2× for some models, because nested trace spans counted the same response twice. The figures haven't been recalculated yet. [HAL GAIA](https://hal.cs.princeton.edu/gaia)

For context: the current list price of Claude Managed Agents is model token rates plus $0.08 per active session-hour. [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)

**The download charts.** Weekly downloads for the week of Oct 5 vs. the week of Jul 13: the Vercel AI SDK went from about 17.7M to 31.0M on npm, and Mastra from about 1.2M to 2.2M. On PyPI (excluding mirrors), LangGraph fell from about 17.6M to 12.2M, the OpenAI Agents SDK from about 8.2M to 3.0M, and CrewAI from about 2.5M to 0.63M. Downloads mostly count CI installs, not users, so read this as a signal, not a verdict. [Data: PyPI stats, npm, via the Tracker](/tracker/)

## Context you shouldn't forget

- **ChatGPT dots** started rolling out on Sep 29 to Pro and Business Premium plans, with an Enterprise beta. That's three weeks ago, not this week, but it's the biggest consumer agent launch of the quarter. [OpenAI](https://openai.com/index/introducing-dots/) · [Indian Express](https://indianexpress.com/article/technology/artificial-intelligence/openai-dots-always-on-ai-agents-explained-10900652/)
- **SWE-bench Verified.** OpenAI stopped reporting it on Feb 23. Its audit found flawed tests in at least 59.4% of the problems it checked, plus signs the models had seen the solutions in training. If a vendor still leads with that number in October, be sceptical. [OpenAI](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/)

## One take

**Compaction is the new retry logic.** A year ago every agent framework bragged about tool calling. Now they're all quietly shipping the same fix: what to do when an agent has been running for three hours and its context is full of stale tool output. I build production agents for a living, and this is where they actually fail. It's not that the model is dumb. It's that the agent forgot what it did 40 steps ago, or killed its own approval request to make room. When four teams fix the same bug in one week, the industry is telling you where the hard part is. If you're picking a framework in 2026, don't ask how many integrations it has. Ask what it does when the context fills up mid-task, and whether a human approval survives that.

---

Every product above has a page in the [Tracker](/tracker/), with versions, downloads and sources. See where they all sit on the [Agent Landscape](/landscape/).
