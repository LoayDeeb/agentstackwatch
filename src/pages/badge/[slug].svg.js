import { all } from '../../lib/data.js';
export function getStaticPaths(){ return all.map(e=>({params:{slug:e.slug},props:{e}})); }
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
export function GET({ props:{e} }){
  const l='tracked on AgentStackWatch'; const v=e.stats.display_version?String(e.stats.display_version).replace(/^v/,''):null;
  const w1=Math.round(l.length*6.3+16), r=v?v.slice(0,24):null, w2=r?Math.round(r.length*6.8+16):0, W=w1+w2;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="20" role="img" aria-label="${esc(e.name)}: ${esc(l)}${r?' '+esc(r):''}"><title>${esc(e.name)} — ${esc(l)}</title><rect width="${W}" height="20" rx="3" fill="#141414"/>${r?`<rect x="${w1}" width="${w2}" height="20" rx="3" fill="#d9480f"/><rect x="${w1}" width="4" height="20" fill="#d9480f"/>`:''}<g fill="#fff" font-family="Verdana,DejaVu Sans,sans-serif" font-size="11"><text x="8" y="14">${esc(l)}</text>${r?`<text x="${w1+8}" y="14">${esc(r)}</text>`:''}</g></svg>`;
  return new Response(svg,{headers:{'Content-Type':'image/svg+xml'}});
}
