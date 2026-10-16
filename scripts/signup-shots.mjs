import fs from 'node:fs'; import { chromium } from 'playwright';
const base=process.argv[2], tag=process.argv[3];
const agent=fs.readdirSync('dist/agents').find(f=>!f.includes('.'));
const pages={home:'/',newsletter:'/newsletter/',post:'/posts/2026-10-16-what-changed-this-week/',agent:`/agents/${agent}/`};
const b=await chromium.launch(fs.existsSync('/usr/bin/google-chrome')?{executablePath:'/usr/bin/google-chrome'}:{});
for(const [vn,vp] of [['mobile',{width:390,height:844}],['m375',{width:375,height:812}],['desktop',{width:1440,height:900}]]){
 if(tag==='live'&&vn==='desktop')continue;
 const p=await b.newPage({viewport:vp,deviceScaleFactor:2});
 for(const [n,u] of Object.entries(pages)){
  await p.goto(base+u,{waitUntil:'networkidle'}).catch(()=>{});
  const s=p.locator('.signup').first(); await s.scrollIntoViewIfNeeded();
  await p.waitForSelector('.signup iframe',{timeout:15000}).catch(()=>console.log('no iframe',n));
  await p.waitForTimeout(6000);
  const info=await p.evaluate(()=>{const f=document.querySelector('.signup iframe');const r=f?.getBoundingClientRect();return {sw:document.documentElement.scrollWidth,iw:r?.width,ih:r?.height}});
  console.log(tag,vn,n,JSON.stringify(info));
  await s.screenshot({path:`screens/signup-${tag}-${n}-${vn}.png`});
 }}
await b.close();
