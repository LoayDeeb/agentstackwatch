// Generates 1200x630 OG images into public/og/ from real data. Run before `npm run build`.
import fsx from 'node:fs'; const require_exe = () => fsx.existsSync('/usr/bin/google-chrome') ? {executablePath:'/usr/bin/google-chrome'} : {};
import { chromium } from 'playwright'; import fs from 'node:fs';
const E = JSON.parse(fs.readFileSync('data/entries.json','utf8')); const S = JSON.parse(fs.readFileSync('data/stats.json','utf8'));
const fmt = n => n==null?null:n>=1e6?(n/1e6).toFixed(1)+'M':n>=1e3?(n/1e3).toFixed(1)+'k':String(n);
const posts = fs.readdirSync('src/content/posts').filter(f=>f.endsWith('.md')).map(f=>{const t=fs.readFileSync('src/content/posts/'+f,'utf8');if(/draft:\s*true/.test(t))return null;return {slug:f.replace(/\.md$/,''),title:(t.match(/title:\s*"?(.*?)"?\n/)||[])[1]}}).filter(Boolean);
const CAT={frameworks:'Dev frameworks & SDKs',personal:'Personal agents',managed:'Managed agent platforms',research:'Research & benchmarks'};
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fonts = ['@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2','@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'].map(p=>'file://'+process.cwd()+'/node_modules/'+p);
const tpl = ({kicker,title,meta=[]}) => `<html><head><style>@font-face{font-family:N;src:url(${fonts[0]})}@font-face{font-family:I;src:url(${fonts[1]})}
body{margin:0;width:1200px;height:630px;background:#fbfaf7;font-family:I;color:#141414;display:flex;flex-direction:column;justify-content:space-between;padding:64px 72px;box-sizing:border-box;border-top:14px solid #d9480f}
.k{font-weight:600;font-size:20px;letter-spacing:.16em;text-transform:uppercase;color:#d9480f}h1{font-family:N;font-weight:400;font-size:${title.length>48?68:88}px;line-height:1.02;letter-spacing:-.03em;margin:22px 0 0;max-width:1000px}
.f{display:flex;justify-content:space-between;align-items:flex-end;border-top:1.5px solid #141414;padding-top:22px}.b{font-family:N;font-size:34px;font-weight:600}.b i{font-weight:400}.m{display:flex;gap:36px;font-size:22px;color:#77736a}.m b{color:#141414;font-family:ui-monospace,monospace}</style></head>
<body><div><div class="k">${esc(kicker)}</div><h1>${esc(title)}</h1></div><div class="f"><div class="b">AgentStack<i>Watch</i></div><div class="m">${meta.map(m=>`<span>${m}</span>`).join('')}</div></div></body></html>`;
const jobs = [['home',{kicker:'The AI agent stack, tracked',title:'What shipped, what broke, what got cheaper.',meta:[`<b>${E.length}</b> products`]}],
 ['landscape',{kicker:'Interactive map',title:'The Agent Landscape',meta:[`<b>${E.length}</b> products`]}],['tracker',{kicker:'Reference',title:'The Tracker',meta:[`<b>${E.length}</b> products, refreshed nightly`]}],
 ...posts.map(p=>['posts-'+p.slug,{kicker:'Agent Stack Weekly',title:p.title}]),
 ...E.map(e=>{const s=S[e.slug]||{};return ['agents-'+e.slug,{kicker:CAT[e.category],title:e.name,meta:[s.display_version&&`v<b>${esc(s.display_version.replace(/^v/,''))}</b>`,s.stars&&`<b>${fmt(s.stars)}</b> stars`,s.downloads_weekly&&`<b>${fmt(s.downloads_weekly.at(-1).n)}</b>/wk`].filter(Boolean)}]})];
const b = await chromium.launch(require_exe()); const p = await b.newPage({viewport:{width:1200,height:630}});
for (const [name,d] of jobs) { await p.setContent(tpl(d),{waitUntil:'load'}); await p.evaluate(()=>document.fonts.ready); await p.screenshot({path:`public/og/${name}.png`}); }
await b.close(); console.log('og images:', jobs.length);
