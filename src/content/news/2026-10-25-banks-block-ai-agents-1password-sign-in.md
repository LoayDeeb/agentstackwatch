---
title: "Banks are blocking AI agents that use your password as 1Password launches agent sign-ins"
date: 2026-10-25
summary: "Big US banks including JPMorgan Chase, Citi, Bank of America, Wells Fargo and Morgan Stanley are restricting AI agents that log in with customers' usernames and passwords. The same week, 1Password launched a way for agents like Muse, Grok Bot, Claude Duet and ChatGPT to sign in without seeing your password. Here's what changed, why 1Password doesn't fix the bank problem, and what to do with your own accounts."
source: "https://www.axios.com/2026/10/22/ai-agents-banks-unauthorized-accounts-access"
sourceName: "Axios"
related: [["/is-openclaw-safe/","Is OpenClaw safe?"],["/best-ai-agent-for-personal-use/","Best AI agent for personal use"],["/best-personal-ai-agent-for-founders/","Best personal AI agent for founders"],["/news/2026-10-24-claude-duet-anthropics-always-on-agent/","Claude Duet, Anthropic's always-on agent"]]
---

## What happened

**The banks.** On October 22, Axios reported that major US banks are detecting unvetted third-party AI agents working inside customer accounts. Most of it is customers handing an agent their own username and password, which goes against most banks' rules that a human logs in. In some cases, Axios says, agents contacted call centers or seemed to take actions "independent of user instructions" ([Axios](https://www.axios.com/2026/10/22/ai-agents-banks-unauthorized-accounts-access)). One example given to CBS News: an agent called a bank with a complaint without checking with the account holder first ([CBS News](https://www.cbsnews.com/news/ai-agents-customer-bank-accounts-security/)).

What the banks are doing, per the reporting:

- **Morgan Stanley** has begun blocking third-party agents from its platforms, though its spokesperson said it hasn't seen "rogue AI agents" ([Axios](https://www.axios.com/2026/10/22/ai-agents-banks-unauthorized-accounts-access)).
- **JPMorgan Chase, Bank of America and Citi** are restricting agents. A JPMorgan spokesperson told Axios: "Under no circumstance should customers share passwords with any person or thing. Period." ([Axios, Oct 23](https://www.axios.com/2026/10/23/ai-catastrophe-wall-street)).
- **Citi** told USA TODAY: "We do not permit third-party AI agents or assistants to log into a customer's account or transact directly within our digital banking platforms." Agents can get limited, read-only access through Citi-approved open banking providers ([USA TODAY](https://www.usatoday.com/story/money/2026/10/23/banks-move-to-limit-ai-agent-access/92385119007/)).
- **Wells Fargo** said it has "taken steps to block unauthorized agents." Its updated online access agreement, which takes effect **November 24**, says that if you let an AI agent in, you're "solely responsible" for supervising it, and transactions it makes, "including those you did not want or intend", count as authorized ([USA TODAY](https://www.usatoday.com/story/money/2026/10/23/banks-move-to-limit-ai-agent-access/92385119007/)).
- **Charles Schwab** has also been blocking unauthorized agents, its CEO said earlier this month ([Reuters via Investing.com](https://www.investing.com/news/stock-market-news/us-banks-detect-unauthorized-ai-agents-in-customer-accounts-axios-reports-4965122)).

Banks stress they haven't seen hacks of customer funds. Reuters adds an important detail: if you shared your own credentials, the agent's transactions generally can't be treated as unauthorized ([Reuters via Investing.com](https://www.investing.com/news/stock-market-news/us-banks-detect-unauthorized-ai-agents-in-customer-accounts-axios-reports-4965122)). Where banks are heading is **read-only access**: agents can see balances and transactions through approved open-banking services (Axios names Plaid as one) but can't move money ([Axios](https://www.axios.com/2026/10/22/ai-agents-banks-unauthorized-accounts-access), [Axios, Oct 23](https://www.axios.com/2026/10/23/ai-catastrophe-wall-street)). David Sacks pushed back on X, saying user-authorized agents such as Muse and Grok Bot are "in no way cyberattacks", and suggested read-only access as the middle ground ([CBS News](https://www.cbsnews.com/news/ai-agents-customer-bank-accounts-security/)).

**1Password.** The same day, October 22, 1Password launched **1Password for Agents** ([1Password](https://1password.com/blog/1password-for-ai-agents), [TechCrunch](https://techcrunch.com/2026/10/22/1password-launches-a-way-for-ai-agents-to-log-in-on-your-behalf-without-seeing-your-password/)). How it works:

- When your agent hits a login page, it asks 1Password for that one login. You see which login and why, and approve or deny it **on your own device**. 1Password fills the password or one-time code straight into the site. The agent only learns that access was granted ([1Password](https://1password.com/personal-ai-agent-integrations)).
- Connecting an agent doesn't open your whole vault. It asks per task, and you can disconnect at any time ([1Password](https://1password.com/personal-ai-agent-integrations)).
- **Which agents:** Meta's Muse and Grok Bot are "rolling out over the coming days". Claude Duet, ChatGPT Work and dots, and Town's Townie are "coming soon". Perplexity, Browser Use, Browserbase, Ramp and others are listed as coming later ([1Password](https://1password.com/blog/1password-for-ai-agents)).
- **Who can use it:** included at no extra cost in 1Password Individual and Family plans on 1Password.com. Accounts on 1Password.eu or 1Password.ca aren't supported yet ([1Password](https://1password.com/blog/1password-for-ai-agents)).

1Password's own FAQ adds the part that matters most: once the agent is signed in, it "may be able to see information or take actions within the signed-in account" ([1Password](https://1password.com/personal-ai-agent-integrations)).

**Still unknown:** whether any bank will accept agent sign-ins through a tool like 1Password; which other banks are rewriting their terms; when the ChatGPT and Claude integrations actually ship; and how banks outside the US will respond. We haven't tested 1Password for Agents ourselves.

## Our take

**These are two different problems, and 1Password only solves one.** 1Password stops your agent from *seeing* your password. It doesn't change what the agent can *do* after it logs in, and it doesn't change your bank's rules. Citi says outright that no third-party agent may log in, however it got in. So "my agent never saw my password" won't help you if it moves money you didn't mean to move.

**Read the Wells Fargo clause twice.** If your bank adopts terms like that, anything an agent does with your login counts as you doing it, mistakes included. That's the real risk for founders who are tempted to let an agent pay suppliers or move cash from the business account.

**For everything that isn't a bank, a credential broker is a big step up.** Pasting passwords into a chat leaves copies you can't control. A per-login approval on your phone is the right model for shopping, travel and work tools. It's the same "ask before you act" pattern we liked in [Claude Duet](/news/2026-10-24-claude-duet-anthropics-always-on-agent/), which already refuses to move money or trade even with your approval, and in [Walmart's agent rules](/news/2026-10-22-walmart-lets-ai-agents-shop-for-you/).

**What to do now:**

1. **Never give an AI agent your bank or brokerage password.** If you already did, change that password, turn on your bank's strongest sign-in option (passkey or app approval), and check recent activity.
2. **Want an agent to help with money?** Use read-only connections your bank approves (it will usually list open-banking or "connected apps" partners). Let the agent read and analyze. Make the payments yourself.
3. **For other sites, stop pasting passwords into chats.** If you use 1Password and your agent is supported (Muse and Grok Bot first), set up 1Password for Agents and approve logins one at a time. Not on 1Password.com, or your agent isn't supported yet? Type the password yourself when the agent stops at a login.
4. **Founders and finance leads:** read your business bank's online agreement for anything on AI agents or "authorized representatives" before letting any agent near payments, and keep every payment behind a human approval. Give each agent only the accounts it needs. Our [founders guide](/best-personal-ai-agent-for-founders/) compares the big personal agents for business use.
