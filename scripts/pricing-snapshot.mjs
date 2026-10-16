// Snapshots each vendor's official pricing page (data/pricing-sources.json) as normalized text in
// data/pricing-snapshots/<slug>.txt. When the text changes, records a line diff in data/pricing.json
// so /pricing can show "page changed on X". Prices themselves are curated in entries.json, never parsed blindly.
import fs from 'node:fs'; import crypto from 'node:crypto';
const src = JSON.parse(fs.readFileSync('data/pricing-sources.json','utf8'));
const P = 'data/pricing.json'; const db = fs.existsSync(P) ? JSON.parse(fs.readFileSync(P,'utf8')) : {};
const today = new Date().toISOString().slice(0,10);
const text = html => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>|<svg[\s\S]*?<\/svg>/gi,' ')
  .replace(/<\/(p|div|li|tr|h\d|section|br)>|<br\s*\/?>/gi,'\n').replace(/<[^>]+>/g,' ')
  .replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#x27;|&#39;|&rsquo;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
  .split('\n').map(l=>l.replace(/\s+/g,' ').trim()).filter(l=>l.length>1).join('\n');
for (const [slug,url] of Object.entries(src)) {
  const rec = db[slug] ||= { url, history: [] }; rec.url = url;
  try {
    const r = await fetch(url,{headers:{'User-Agent':'Mozilla/5.0 (compatible; AgentStackWatch/1.0; +https://agentstackwatch.com)'},redirect:'follow',signal:AbortSignal.timeout(30000)});
    rec.last_status = r.status; rec.last_attempt = today;
    if (!r.ok) { console.log(slug, r.status); continue; }
    const t = text(await r.text()); const hash = crypto.createHash('sha256').update(t).digest('hex').slice(0,16);
    const f = `data/pricing-snapshots/${slug}.txt`; const old = fs.existsSync(f) ? fs.readFileSync(f,'utf8') : null;
    rec.last_checked = today;
    if (t.length < 200) { rec.note = 'page text too short (likely client-rendered); snapshot not trusted'; }
    if (old !== null && rec.hash && rec.hash !== hash) {
      const a = new Set(old.split('\n')), b = new Set(t.split('\n'));
      rec.history.push({ date: today, from: rec.hash, to: hash, removed: [...a].filter(x=>!b.has(x)).slice(0,40), added: [...b].filter(x=>!a.has(x)).slice(0,40) });
      rec.last_changed = today;
    }
    if (!rec.hash) rec.first_snapshot = today;
    rec.hash = hash; fs.writeFileSync(f, t); console.log(slug, r.status, t.length);
  } catch (e) { rec.last_status = 'error'; rec.last_attempt = today; console.log(slug, 'error', e.message); }
}
fs.writeFileSync(P, JSON.stringify(db,null,1));
