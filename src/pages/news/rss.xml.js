import rss from '@astrojs/rss'; import { getNews } from '../../lib/news.js';
export async function GET(context) {
  const items = await getNews();
  return rss({ title: 'AgentStackWatch news', description: 'Sourced news on personal AI agents, with a plain-language take.', site: context.site,
    items: items.map(p => ({ title: p.data.title, pubDate: p.data.date, description: p.data.summary, link: `/news/${p.slug}/` })) });
}
