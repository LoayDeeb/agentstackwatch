// Per-page numbered citations. Reuses the buyer's-guide sources (checked 2026-10-16) plus sources checked for the guides hub on 2026-10-17
// and for the personal-use guide on 2026-10-18.
import { SRC as GSRC } from './guide-data.js';
import ps from '../../data/pricing-sources.json';
const G = '16 Oct 2026', T = '17 Oct 2026', S = '18 Oct 2026';
const OCR = t => [`oc-${t}`, `https://github.com/openclaw/openclaw/releases/tag/${t}`, `OpenClaw release notes ${t}`, T];
const EXTRA = [
 ['oai-rn','https://help.openai.com/en/articles/6825453-chatgpt-release-notes','ChatGPT release notes (OpenAI Help Center)',T],
 ['oai-biz2','https://help.openai.com/en/articles/8792828-chatgpt-business-overview','ChatGPT Business overview (re-checked)',T],
 ['cl-team2','https://support.claude.com/en/articles/9266767-what-is-the-team-plan','Claude Team plan (re-checked)',T],
 ['cl-certs','https://privacy.claude.com/en/articles/10015870-what-certifications-has-anthropic-obtained','Anthropic: certifications for commercial products',T],
 ['oc-sec','https://docs.openclaw.ai/gateway/security','OpenClaw docs: Security',T],
 ['oc-base','https://docs.openclaw.ai/gateway/security/hardened-baseline','OpenClaw docs: Hardened baselines',T],
 ['oc-policy','https://github.com/openclaw/openclaw/blob/main/SECURITY.md','OpenClaw SECURITY.md (trust model)',T],
 ['oc-adv','https://github.com/openclaw/openclaw/security/advisories','OpenClaw published security advisories (GitHub)',T],
 ['oc-ghsa-gv46','https://github.com/openclaw/openclaw/security/advisories/GHSA-gv46-4xfq-jv58','GHSA-gv46-4xfq-jv58: RCE via node invoke approval bypass',T],
 ['oc-ghsa-qrq5','https://github.com/openclaw/openclaw/security/advisories/GHSA-qrq5-wjgg-rvqw','GHSA-qrq5-wjgg-rvqw: path traversal in plugin installation',T],
 ['oc-ghsa-4jpw','https://github.com/openclaw/openclaw/security/advisories/GHSA-4jpw-hj22-2xmc','GHSA-4jpw-hj22-2xmc: pairing tokens could mint operator.admin',T],
 ['oc-ghsa-9p3r','https://github.com/openclaw/openclaw/security/advisories/GHSA-9p3r-hh9g-5cmg','GHSA-9p3r-hh9g-5cmg: sandbox escape via TOCTOU race',T],
 ['oc-ghsa-8rh7','https://github.com/openclaw/openclaw/security/advisories/GHSA-8rh7-6779-cjqq','GHSA-8rh7-6779-cjqq: .env injection allows config takeover',T],
 ['ic-pricing','https://www.intercom.com/pricing','Intercom pricing (Fin AI Agent)',T],
 ['sf-agentforce','https://www.salesforce.com/agentforce/pricing/','Salesforce Agentforce pricing',T],
 ['nber-genai','https://www.nber.org/papers/w31161','Brynjolfsson, Li & Raymond, "Generative AI at Work" (NBER w31161; QJE 2025)',T],
 ['oai-agent2','https://help.openai.com/en/articles/11752874-chatgpt-agent','ChatGPT agent help article (re-checked)',T],
 ['mn-pricing2','https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus','Manus membership pricing (re-checked)',T],
 ['mn-sec2','https://manus.im/security','Manus security page (re-checked)',T],
 ['hm2','https://hermes-agent.nousresearch.com/','Hermes Agent homepage (re-checked)',T],
 ['hm-sec','https://github.com/NousResearch/hermes-agent/blob/main/SECURITY.md','Hermes Agent SECURITY.md (trust model)',T],
 ['hm-gh','https://github.com/NousResearch/hermes-agent','Hermes Agent on GitHub',T],
 ['hm-adv','https://github.com/NousResearch/hermes-agent/security/advisories','Hermes Agent published security advisories (GitHub)',T],
 ['oc-gh','https://github.com/openclaw/openclaw','OpenClaw on GitHub',T],
 ['gb-pricing2','https://docs.x.ai/x-subscription/pricing','The X Subscription pricing, incl. Teams (re-checked)',T],
 // Checked 18 Oct 2026 for /best-ai-agent-for-personal-use/
 ['oai-plus','https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus','What is ChatGPT Plus? (OpenAI Help Center)',S],
 ['oai-pricing3','https://chatgpt.com/pricing','ChatGPT plans & pricing (re-checked)',S],
 ['oai-rn3','https://help.openai.com/en/articles/6825453-chatgpt-release-notes','ChatGPT release notes (re-checked)',S],
 ['oai-data','https://help.openai.com/en/articles/7730893-data-controls-faq','Data controls in ChatGPT (OpenAI Help Center)',S],
 ['oai-agent3','https://help.openai.com/en/articles/11752874-chatgpt-agent','ChatGPT agent help article (re-checked)',S],
 ['oai-dot','https://help.openai.com/en/articles/20001530-getting-started-with-your-dot','Getting started with your dot (OpenAI Help Center)',S],
 ['cl-pricing3','https://claude.com/pricing','Claude pricing & plan comparison (re-checked)',S],
 ['cl-gws3','https://support.claude.com/en/articles/10166901-use-google-workspace-connectors','Claude Google Workspace connectors (re-checked)',S],
 ['gb-page3','https://x.ai/bot','Grok Bot product page (re-checked)',S],
 ['gb-pricing3','https://docs.x.ai/x-subscription/pricing','The X Subscription pricing (re-checked)',S],
 ['gb-docs3','https://docs.x.ai/x-subscription/grok-bot','Grok Bot on The X Subscription (re-checked)',S],
 ['g-plans3','https://one.google.com/about/google-ai-plans/','Google AI plans (re-checked)',S],
 ['g-privacy','https://support.google.com/gemini/answer/13594961','Gemini Apps Privacy Hub (Google)',S],
 ['mn-pricing3','https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus','Manus membership pricing (re-checked)',S],
 ['oc3','https://openclaw.ai/','OpenClaw homepage (re-checked)',S],
 ['hm3','https://hermes-agent.nousresearch.com/','Hermes Agent homepage (re-checked)',S],
 ['ly3','https://www.lindy.ai/pricing','Lindy pricing & FAQ (re-checked)',S],
 ['mu3','https://www.meta.com/help/subscriptions/1021145227643680/','About Muse subscriptions (Meta, re-checked)',S],
 ['mu-priv3','https://www.meta.com/help/artificial-intelligence/1047255454427887/','How Muse handles privacy, safety and security (Meta, re-checked)',S],
 ...['v2026.10.4','v2026.10.2','v2026.9.33','v2026.9.3','v2026.9.2','v2026.9.1','v2026.8.35','v2026.8.33','v2026.8.2','v2026.8.1','v2026.7.35','v2026.6.33'].map(OCR),
 ...Object.entries(ps).map(([k,u])=>[`ps-${k}`,u,`Pricing page: ${k}`,G]),
];
export const ALL = Object.fromEntries([...GSRC.map(([k,u,t])=>[k,u,t,G]), ...EXTRA].map(([k,u,t,d])=>[k,{u,t,d}]));
export function citer(){
 const used=[];
 const c=(...ks)=>ks.map(k=>{ if(!ALL[k]) throw new Error('unknown source '+k); let i=used.indexOf(k); if(i<0){used.push(k);i=used.length-1;} return `<a class="cite" href="${ALL[k].u}" title="${ALL[k].t} · checked ${ALL[k].d}" target="_blank" rel="noopener">${i+1}</a>`; }).join('');
 return { c, used, U:'<span class="unk">unknown</span>' };
}
