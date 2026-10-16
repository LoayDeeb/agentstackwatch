import entries from '../../data/entries.json';
import stats from '../../data/stats.json';
import changes from '../../data/changes.json';
import pricing from '../../data/pricing.json';
import pricingCurated from '../../data/pricing-curated.json';
import breaking from '../../data/breaking.json';
export { pricing, pricingCurated, breaking };
export const CATS = {
  personal: { name: 'Personal agents', blurb: 'Consumer and self-hosted assistants that act on your behalf.' },
  managed: { name: 'Managed agent platforms', blurb: 'Hosted runtimes, agent APIs and sandboxes.' },
  frameworks: { name: 'Dev frameworks & SDKs', blurb: 'Libraries for building agents in code.' },
  research: { name: 'Research & benchmarks', blurb: 'Leaderboards and benchmarks used to evaluate agents.' },
};
export const all = entries.map(e => {
  const s = stats[e.slug] || {};
  const repoVerified = !!s.repo_full_name;
  return { ...e, stats: s, repoVerified, status: e.verified ? 'verified' : repoVerified ? 'repo-verified' : 'unverified' };
});
export const bySlug = Object.fromEntries(all.map(e => [e.slug, e]));
export const PAIRS = [
  ['langgraph','crewai'], ['openai-agents-sdk','claude-agent-sdk'], ['claude-managed-agents','openai-agents-api'],
  ['openclaw','hermes-agent'], ['pydantic-ai','langgraph'], ['mastra','vercel-ai-sdk'],
  // personal-agent pairs first in priority
  ['chatgpt-dots','claude-app'], ['grok-bot','chatgpt-dots'], ['grok-bot','claude-app'], ['grok-bot','gemini-agent'],
  ['claude-app','gemini-agent'], ['manus','lindy'], ['openclaw','grok-bot'], ['manus','chatgpt-dots'], ['perplexity-comet','gemini-agent'],
  // managed + a few framework pairs
  ['langgraph','openai-agents-sdk'], ['vertex-agent-engine','bedrock-agentcore'],
];
export { changes };
export const fmt = n => n == null ? '—' : n >= 1e6 ? (n/1e6).toFixed(1)+'M' : n >= 1e3 ? (n/1e3).toFixed(1)+'k' : String(n);
export const d = s => s ? s.slice(0,10) : '—';
// Real-data derived helpers
export const releases = all.filter(e=>e.stats.display_version && e.stats.release_date)
  .map(e=>({slug:e.slug,name:e.name,v:e.stats.display_version,date:e.stats.release_date.slice(0,10)}))
  .sort((a,b)=>b.date.localeCompare(a.date));
export const growth = e => { const w=e.stats.downloads_weekly; if(!w||w.length<14) return null; const last=w.at(-1).n, base=w.at(-13).n; return base? (last-base)/base : null; };
export const movers = all.filter(e=>growth(e)!=null).map(e=>({e,g:growth(e)})).sort((a,b)=>b.g-a.g);
