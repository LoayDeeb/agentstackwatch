// Scans recent GitHub release notes of every tracked repo for breaking-change keywords.
// Writes data/breaking.json: [{slug,name,category,tag,date,week,url,keywords,excerpt}]
import fs from 'node:fs';
const entries = JSON.parse(fs.readFileSync('data/entries.json','utf8'));
const H = {'User-Agent':'agentstackwatch','Accept':'application/vnd.github+json'};
if (process.env.GITHUB_TOKEN) H.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const KW = [['BREAKING CHANGE',/BREAKING[ _-]CHANGES?/],['breaking',/\bbreaking\b/i],['removed',/\bremoved?\b/i],['deprecated',/\bdeprecat(ed|ion|e)\b/i],['migration',/\bmigrat(ion|e)\b/i]];
const week = s => { const d=new Date(s); d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7)); return d.toISOString().slice(0,10); };
const prev = fs.existsSync('data/breaking.json') ? JSON.parse(fs.readFileSync('data/breaking.json','utf8')) : [];
const out = new Map(prev.map(x=>[x.url,x]));
for (const e of entries.filter(e=>e.github)) {
  const r = await fetch(`https://api.github.com/repos/${e.github}/releases?per_page=40`,{headers:H});
  if (!r.ok) { console.log(e.slug, r.status); continue; }
  for (const rel of await r.json()) {
    if (rel.draft || !rel.published_at) continue;
    const body = (rel.body||'').replace(/\r/g,'');
    const kws = KW.filter(([,re])=>re.test(body)).map(([k])=>k); if (!kws.length) continue;
    const lines = body.split('\n').filter(l=>KW.some(([,re])=>re.test(l))).map(l=>l.replace(/[#*`>]|\[([^\]]*)\]\([^)]*\)/g,(m,t)=>t??'').replace(/\s+/g,' ').trim()).filter(Boolean);
    out.set(rel.html_url,{slug:e.slug,name:e.name,category:e.category,tag:rel.tag_name,date:rel.published_at.slice(0,10),week:week(rel.published_at),url:rel.html_url,keywords:kws,excerpt:lines.slice(0,4).map(l=>l.slice(0,220))});
  }
  process.stdout.write('.');
}
const arr=[...out.values()].sort((a,b)=>b.date.localeCompare(a.date)||a.slug.localeCompare(b.slug));
fs.writeFileSync('data/breaking.json', JSON.stringify(arr,null,1)); console.log(`\n${arr.length} flagged releases`);
