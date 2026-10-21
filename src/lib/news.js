import { getCollection } from 'astro:content';
export const getNews = async () => (await getCollection('news', p => !p.data.draft)).sort((a,b)=>b.data.date-a.data.date || a.slug.localeCompare(b.slug));
