// Per-page numbered citations. Reuses the buyer's-guide sources (checked 2026-10-16) plus sources checked for the guides hub on 2026-10-17.
import { SRC as GSRC } from './guide-data.js';
import ps from '../../data/pricing-sources.json';
const G = '16 Oct 2026', T = '17 Oct 2026';
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
 ...['v2026.10.4','v2026.10.2','v2026.9.33','v2026.9.3','v2026.9.2','v2026.9.1','v2026.8.35','v2026.8.33','v2026.8.2','v2026.8.1','v2026.7.35','v2026.6.33'].map(OCR),
 ...Object.entries(ps).map(([k,u])=>[`ps-${k}`,u,`Pricing page: ${k}`,G]),
];
export const ALL = Object.fromEntries([...GSRC.map(([k,u,t])=>[k,u,t,G]), ...EXTRA].map(([k,u,t,d])=>[k,{u,t,d}]));
export function citer(){
 const used=[];
 const c=(...ks)=>ks.map(k=>{ if(!ALL[k]) throw new Error('unknown source '+k); let i=used.indexOf(k); if(i<0){used.push(k);i=used.length-1;} return `<a class="cite" href="${ALL[k].u}" title="${ALL[k].t} · checked ${ALL[k].d}" target="_blank" rel="noopener">${i+1}</a>`; }).join('');
 return { c, used, U:'<span class="unk">unknown</span>' };
}
