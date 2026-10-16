// Pulls GitHub repo stats + latest release, PyPI (pypistats) and npm weekly downloads.
// Writes data/stats.json and appends diffs to data/changes.json. Works unauthenticated; GITHUB_TOKEN raises rate limit.
import fs from 'node:fs';
const entries = JSON.parse(fs.readFileSync('data/entries.json','utf8'));
const prev = fs.existsSync('data/stats.json') ? JSON.parse(fs.readFileSync('data/stats.json','utf8')) : {};
const changes = fs.existsSync('data/changes.json') ? JSON.parse(fs.readFileSync('data/changes.json','utf8')) : [];
const H = {'User-Agent':'agentstackwatch','Accept':'application/vnd.github+json'};
if (process.env.GITHUB_TOKEN) H.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const MAX_WAIT = Number(process.env.MAX_RATE_WAIT_S ?? 900);
const sleep = ms => new Promise(r => setTimeout(r, ms));
// fetch JSON with retry/backoff; on GitHub rate limit waits until reset (capped by MAX_RATE_WAIT_S)
const j = async (u,h={},tries=4) => {
  for (let i=0;i<tries;i++) {
    try {
      const r = await fetch(u,{headers:h});
      if (r.ok) return r.json();
      if ((r.status===403||r.status===429) && r.headers.get('x-ratelimit-remaining')==='0') {
        const wait = Math.max(1, Number(r.headers.get('x-ratelimit-reset'))*1000 - Date.now());
        if (wait/1000 > MAX_WAIT) return {__status:'rate-limited'};
        console.log(`\nrate limited; waiting ${Math.ceil(wait/1000)}s`); await sleep(wait+1000); continue;
      }
      if (r.status>=500||r.status===429) { await sleep(2000*2**i); continue; }
      return {__status:r.status};
    } catch { await sleep(2000*2**i); }
  }
  return {__status:'err'};
};
const today = new Date().toISOString().slice(0,10);
const out = {};
for (const e of entries) {
  const s = { fetched_at: new Date().toISOString() };
  if (e.github) {
    const r = await j(`https://api.github.com/repos/${e.github}`, H);
    if (r.__status) { s.github_error = r.__status; const o=prev[e.slug]||{}; for (const k of ['stars','forks','open_issues','license','pushed_at','archived','repo_full_name']) if (o[k]!==undefined) s[k]=o[k]; } else Object.assign(s,{stars:r.stargazers_count,forks:r.forks_count,open_issues:r.open_issues_count,license:r.license?.spdx_id??null,pushed_at:r.pushed_at,archived:r.archived,repo_full_name:r.full_name});
    const rel = await j(`https://api.github.com/repos/${e.github}/releases/latest`, H);
    if (!rel.__status) Object.assign(s,{latest_release:rel.tag_name,release_date:rel.published_at,release_url:rel.html_url});
  }
  if (e.pypi) { const p = await j(`https://pypistats.org/api/packages/${e.pypi}/recent`); if (p.data) s.pypi_last_week = p.data.last_week;
    const v = await j(`https://pypi.org/pypi/${e.pypi}/json`); if (v.info) s.pypi_version = v.info.version; }
  if (e.npm) { const n = await j(`https://api.npmjs.org/downloads/point/last-week/${e.npm}`); if (n.downloads!=null) s.npm_last_week = n.downloads;
    const v = await j(`https://registry.npmjs.org/${e.npm}/latest`); if (v.version) s.npm_version = v.version; }
  // Real weekly download series (last ~26 weeks) for sparklines
  const weekly = days => { const m = new Map(); for (const [day,n] of days) { const dt=new Date(day+'T00:00:00Z'); dt.setUTCDate(dt.getUTCDate()-((dt.getUTCDay()+6)%7)); const k=dt.toISOString().slice(0,10); m.set(k,(m.get(k)||0)+n); } return [...m.entries()].sort().slice(1,-1).map(([w,n])=>({w,n})); };
  if (e.pypi) { const o = await j(`https://pypistats.org/api/packages/${e.pypi}/overall?mirrors=false`); if (o.data) { s.downloads_weekly = weekly(o.data.filter(r=>r.category==='without_mirrors').map(r=>[r.date,r.downloads])).slice(-26); s.downloads_source='PyPI'; } }
  else if (e.npm) { const end=new Date(); const start=new Date(end-182*864e5); const r = await j(`https://api.npmjs.org/downloads/range/${start.toISOString().slice(0,10)}:${end.toISOString().slice(0,10)}/${e.npm}`); if (r.downloads) { s.downloads_weekly = weekly(r.downloads.map(x=>[x.day,x.downloads])).slice(-26); s.downloads_source='npm'; } }
  s.display_version = s.pypi_version || s.npm_version || s.latest_release || null;
  s.display_version_source = s.pypi_version ? 'PyPI' : s.npm_version ? 'npm' : s.latest_release ? 'GitHub release' : null;
  const p = prev[e.slug] || {};
  for (const k of ['latest_release','pypi_version','npm_version']) if (s[k] && p[k] && s[k]!==p[k]) changes.push({date:today,slug:e.slug,name:e.name,type:'release',field:k,from:p[k],to:s[k],url:s.release_url??null});
  out[e.slug] = s; process.stdout.write('.');
}
fs.writeFileSync('data/stats.json', JSON.stringify(out,null,1));
fs.writeFileSync('data/changes.json', JSON.stringify(changes,null,1));
console.log(`\nfetched ${entries.length}; changes total ${changes.length}`);
