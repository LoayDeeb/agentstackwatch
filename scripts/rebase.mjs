// Post-build: prefix root-relative URLs in dist with BASE_PATH (e.g. /agentstackwatch) for GitHub Pages project sites.
import fs from 'node:fs'; import path from 'node:path';
const B = (process.env.BASE_PATH || '').replace(/\/$/, ''); if (!B) { console.log('rebase: no BASE_PATH, skipping'); process.exit(0); }
const SITE = (process.env.SITE_URL || 'https://loaydeeb.github.io').replace(/\/$/, '');
const walk = d => fs.readdirSync(d,{withFileTypes:true}).flatMap(f => f.isDirectory() ? walk(path.join(d,f.name)) : [path.join(d,f.name)]);
let n = 0;
for (const f of walk('dist').filter(f => /\.(html|css|xml)$/.test(f))) {
  let s = fs.readFileSync(f,'utf8'); const o = s;
  s = s.replace(/((?:href|src|action|content)=["'])\/(?!\/)/g, (m,a,i,str) => str.startsWith(B.slice(1)+'/', i+m.length) ? m : a+B+'/');
  s = s.replace(/url\(\/(?!\/)/g, (m,i,str) => str.startsWith(B.slice(1)+'/', i+m.length) ? m : `url(${B}/`);
  s = s.split(SITE+'/og/').join(SITE+B+'/og/');
  if (f.endsWith('.xml')) s = s.replace(/<link>(https?:\/\/[^<]*?)\/posts\//g, `<link>${SITE}${B}/posts/`).replace(new RegExp(`<link>${SITE}/</link>`), `<link>${SITE}${B}/</link>`);
  if (s !== o) { fs.writeFileSync(f, s); n++; }
}
console.log(`rebase: rewrote ${n} files with base ${B}`);
