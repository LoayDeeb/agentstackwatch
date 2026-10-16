# Generates data/entries.yaml. Facts marked verified only when checked against a cited source on 2026-10-16.
import json
U="unknown"
def e(slug,name,cat,maker,url,desc,pricing=U,oss=U,lic=U,gh=None,pypi=None,npm=None,verified=False,sources=(),notes=None):
    return dict(slug=slug,name=name,category=cat,maker=maker,url=url,description=desc,pricing=pricing,open_source=oss,license=lic,
                github=gh,pypi=pypi,npm=npm,verified=verified,sources=list(sources),notes=notes)
P,M,F,R="personal","managed","frameworks","research"
E=[
e("grok-bot","Grok Bot",P,"xAI","https://x.ai/bot","AI teammate included with The X Subscription.","Included in X Premium ($30/mo), Super ($100/mo), Ultra ($200/mo); not in Plus",False,"proprietary",verified=True,sources=["https://docs.x.ai/x-subscription/pricing","https://docs.x.ai/x-subscription/grok-bot"]),
e("muse","Muse from Meta",P,"Meta","https://apps.apple.com/us/app/muse-from-meta/id6760173601","Personal agent app (iOS, Android, Mac) for email, bookings, budgets and shopping, with approval before actions.",U,False,"proprietary",verified=True,sources=["https://apps.apple.com/us/app/muse-from-meta/id6760173601","https://www.meta.com/help/artificial-intelligence/1047255454427887/"],notes="Pricing not found in sources."),
e("openclaw","OpenClaw",P,"OpenClaw Foundation (501(c)(3))","https://openclaw.ai/","Self-hosted personal assistant gateway for WhatsApp, Telegram, Slack, iMessage and 20+ channels.","Free; no paid tier or hosted service",True,"MIT",gh="openclaw/openclaw",npm="openclaw",verified=True,sources=["https://openclaw.ai/","http://github.com/openclaw/openclaw"]),
e("chatgpt-dots","ChatGPT dots",P,"OpenAI","https://chatgpt.com/features/dots/","Always-on cloud agent with its own computer, powered by GPT-6 Astra.","First dot included in Pro, Business Premium, Enterprise (rolling out)",False,"proprietary",verified=True,sources=["https://openai.com/index/introducing-dots/","https://help.openai.com/en/articles/20001530-getting-started-with-your-dot"]),
e("hermes-agent","Hermes Agent",P,"Nous Research","https://hermes-agent.nousresearch.com/","Self-improving open-source agent with persistent memory, skills and multi-channel gateway.","Free (MIT); optional Nous Portal subscription",True,"MIT",gh="NousResearch/hermes-agent",verified=True,sources=["https://hermes-agent.nousresearch.com/","https://github.com/nousresearch/hermes-agent/"]),
e("manus","Manus",P,U,"https://manus.im/","General-purpose autonomous agent.",notes="Affiliate reported 10%/365 days by third party (aiaffiliate.cc); unconfirmed."),
e("lindy","Lindy",P,U,"https://www.lindy.ai/","AI assistant/agent builder for work tasks.",notes="Affiliate: 20% per sale for 1 year (partners.dub.co/lindy).",sources=["https://partners.dub.co/lindy"]),
e("perplexity-comet","Perplexity Comet",P,"Perplexity","https://www.perplexity.ai/comet","Agentic browser."),
e("gemini-agent","Gemini Agent",P,"Google","https://gemini.google.com/","Agent mode in the Gemini app."),
e("claude-app","Claude (app)",P,"Anthropic","https://claude.ai/","Anthropic's consumer assistant app."),
e("claude-managed-agents","Claude Managed Agents",M,"Anthropic","https://platform.claude.com/docs/en/managed-agents/overview","Hosted agent harness with sandboxes, stateful sessions and scheduling (beta).","Model token rates + $0.08 per active session-hour; web search $10/1k",False,"proprietary",verified=True,sources=["https://platform.claude.com/docs/en/about-claude/pricing","https://platform.claude.com/docs/en/managed-agents/overview"]),
e("openai-agents-api","OpenAI Agents API",M,"OpenAI","https://developers.openai.com/api/docs/guides/agents-api/overview","Hosted Codex harness with sessions and optional OpenAI-hosted sandbox (beta).","No platform fee; tokens + tool/container rates",False,"proprietary",verified=True,sources=["https://openai.com/index/introducing-the-agents-api/","https://help.openai.com/en/articles/20001551-agents-api-beta-faq"],notes="Container billing bug reported by awaited.dev."),
e("vertex-agent-engine","Vertex AI Agent Engine",M,"Google Cloud","https://cloud.google.com/vertex-ai","Managed runtime for deploying agents on Google Cloud."),
e("bedrock-agentcore","Amazon Bedrock AgentCore",M,"AWS","https://aws.amazon.com/bedrock/","Managed agent runtime services on AWS."),
e("azure-foundry-agents","Azure AI Foundry Agent Service",M,"Microsoft","https://azure.microsoft.com/","Managed agent service on Azure."),
e("relevance-ai","Relevance AI",M,"Relevance AI","https://relevanceai.com/","Platform to build and run AI agent workforces.",notes="Affiliate: 15% recurring for 12 months.",sources=["https://relevanceai.com/affiliate-program"]),
e("letta-cloud","Letta Cloud",M,"Letta","https://www.letta.com/","Hosted stateful agents with memory."),
e("langgraph-platform","LangGraph Platform",M,"LangChain","https://www.langchain.com/","Deployment platform for LangGraph agents."),
e("crewai-amp","CrewAI AMP",M,"CrewAI","https://www.crewai.com/","Enterprise platform for CrewAI agents."),
e("e2b","E2B",M,"E2B","https://e2b.dev/","Cloud sandboxes for agent code execution.",gh="e2b-dev/E2B"),
e("modal","Modal",M,"Modal","https://modal.com/","Serverless compute; supported Hermes Agent backend.",sources=["https://github.com/nousresearch/hermes-agent/"]),
e("daytona","Daytona",M,"Daytona","https://www.daytona.io/","Sandboxes for AI code; supported Hermes Agent backend.",gh="daytonaio/daytona",sources=["https://github.com/nousresearch/hermes-agent/"]),
]
fw=[("langgraph","LangGraph","LangChain","langchain-ai/langgraph","langgraph",None,"Graph/state-first framework for stateful agents."),
("pydantic-ai","Pydantic AI","Pydantic","pydantic/pydantic-ai","pydantic-ai",None,"Type-safe Python agent framework."),
("openai-agents-sdk","OpenAI Agents SDK","OpenAI","openai/openai-agents-python","openai-agents",None,"Lightweight SDK with handoffs, guardrails, tracing."),
("claude-agent-sdk","Claude Agent SDK","Anthropic","anthropics/claude-agent-sdk-python","claude-agent-sdk",None,"SDK for building agents on the Claude Code harness."),
("google-adk","Google ADK","Google","google/adk-python","google-adk",None,"Agent Development Kit."),
("crewai","CrewAI","CrewAI","crewAIInc/crewAI","crewai",None,"Role-based multi-agent framework."),
("mastra","Mastra","Mastra","mastra-ai/mastra",None,"@mastra/core","TypeScript agent framework."),
("vercel-ai-sdk","Vercel AI SDK","Vercel","vercel/ai",None,"ai","TypeScript toolkit for AI apps and agents."),
("llamaindex","LlamaIndex","LlamaIndex","run-llama/llama_index","llama-index",None,"Framework for RAG and document agents."),
("haystack","Haystack","deepset","deepset-ai/haystack","haystack-ai",None,"Pipelines for search/NLP and agents."),
("letta","Letta","Letta","letta-ai/letta","letta",None,"Framework for stateful agents with long-term memory."),
("dspy","DSPy","Stanford NLP","stanfordnlp/dspy","dspy",None,"Programming (not prompting) LMs; prompt optimization."),
("smolagents","smolagents","Hugging Face","huggingface/smolagents","smolagents",None,"Minimal code-executing agents."),
("browser-use","Browser Use","Browser Use","browser-use/browser-use","browser-use",None,"Browser automation for agents."),
("openhands","OpenHands","All Hands AI","All-Hands-AI/OpenHands",None,None,"Open-source coding agent."),
("goose","Goose","Block","block/goose",None,None,"Open-source on-machine agent.")]
for s,n,mk,gh,py,nm,d in fw:
    E.append(e(s,n,F,mk,f"https://github.com/{gh}",d,"Free / open source",True,U,gh=gh,pypi=py,npm=nm,sources=["https://www.reddit.com/r/AI_Agents/comments/1tuum2e/best_agentic_frameworks_in_2026_ranked_by_what/"]))
E+=[
e("hal","HAL (Holistic Agent Leaderboard)",R,"Princeton SAgE","https://hal.cs.princeton.edu/","Cost-aware third-party agent leaderboard; updates paused.",verified=True,sources=["https://hal.cs.princeton.edu/","https://arxiv.org/pdf/2510.11977"],notes="Known issue (2026-10-05): some costs overstated 2x."),
e("swe-bench","SWE-bench",R,"SWE-bench team","https://www.swebench.com/","Coding agent benchmark on real GitHub issues.",gh="SWE-bench/SWE-bench",sources=["https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/"],notes="OpenAI stopped evaluating SWE-bench Verified."),
e("gaia","GAIA",R,U,"https://hal.cs.princeton.edu/gaia","General AI assistant benchmark (3 levels).",sources=["https://hal.cs.princeton.edu/gaia"]),
e("tau-bench","τ-bench",R,"Sierra",U,"Tool-agent-user customer service benchmark.",gh="sierra-research/tau-bench"),
e("osworld","OSWorld",R,U,U,"Computer-use agent benchmark.",gh="xlang-ai/OSWorld"),
]
json.dump(E,open("data/entries.json","w"),indent=1,ensure_ascii=False)
print(len(E))
