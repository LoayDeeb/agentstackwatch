import rss from '@astrojs/rss'; import { getCollection } from 'astro:content';
export async function GET(context) {
  const posts = (await getCollection('posts')).sort((a,b)=>b.data.date-a.data.date);
  return rss({ title: 'AgentStackWatch', description: 'What shipped, what broke and what got cheaper in AI agents.', site: context.site,
    items: posts.map(p => ({ title: p.data.title, pubDate: p.data.date, description: p.data.summary, link: `/posts/${p.slug}/` })) });
}
