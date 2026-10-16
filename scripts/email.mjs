// Builds an email-ready (Beehiiv-friendly) HTML version of a post from dist output. Usage: node scripts/email.mjs <slug> <out>
import fs from 'node:fs';
const [slug, out] = process.argv.slice(2); const SITE = 'https://agentstackwatch.com';
const html = fs.readFileSync(`dist/posts/${slug}/index.html`, 'utf8');
let body = html.match(/<div class="prose">([\s\S]*?)<\/div><\/article>/)[1];
const title = html.match(/<h1>([\s\S]*?)<\/h1>/)[1]; const dek = html.match(/<p class="dek">([\s\S]*?)<\/p>/)[1];
body = body.replace(/href="\/(?!\/)/g, `href="${SITE}/`).replace(/<a href="/g, '<a style="color:#d9480f;text-decoration:underline;" href="')
 .replace(/<h2[^>]*>/g, '<h2 style="font-family:Georgia,serif;font-size:24px;line-height:1.25;color:#141414;margin:32px 0 10px;">')
 .replace(/<p>/g, '<p style="font-family:Georgia,serif;font-size:18px;line-height:1.65;color:#2b2b2b;margin:0 0 16px;">')
 .replace(/<ul>/g, '<ul style="font-family:Georgia,serif;font-size:17px;line-height:1.6;color:#2b2b2b;padding-left:22px;margin:0 0 16px;">')
 .replace(/<li>/g, '<li style="margin:0 0 10px;">').replace(/<code>/g, '<code style="font-family:Menlo,monospace;font-size:14px;background:#f3f1ea;padding:1px 5px;border-radius:4px;">')
 .replace(/<hr>/g, '<hr style="border:0;border-top:1px solid #e5e1d6;margin:28px 0;">');
const doc = `<!-- Paste into Beehiiv (HTML block / custom HTML). Links are absolute. -->
<div style="max-width:640px;margin:0 auto;padding:8px 4px;background:#ffffff;">
<p style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d9480f;margin:0 0 10px;">Agent Stack Weekly · Issue #1</p>
<h1 style="font-family:Georgia,serif;font-size:32px;line-height:1.15;color:#141414;margin:0 0 12px;font-weight:normal;">${title}</h1>
<p style="font-family:Georgia,serif;font-size:18px;line-height:1.5;color:#77736a;margin:0 0 6px;">${dek}</p>
<p style="font-family:Arial,sans-serif;font-size:13px;color:#77736a;margin:0 0 24px;">By Loay Deeb · <a style="color:#d9480f;" href="${SITE}/posts/${slug}/">Read on the web</a></p>
${body}
<p style="font-family:Arial,sans-serif;font-size:13px;color:#77736a;margin:32px 0 0;border-top:1px solid #e5e1d6;padding-top:16px;">You're getting this because you subscribed to AgentStackWatch. <a style="color:#d9480f;" href="${SITE}/tracker/">Tracker</a> · <a style="color:#d9480f;" href="${SITE}/landscape/">Landscape</a></p>
</div>`;
fs.writeFileSync(out, doc); console.log('wrote', out, doc.length, 'chars');
