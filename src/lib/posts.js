import { getCollection } from 'astro:content';
export const getPosts = async () => (await getCollection('posts')).sort((a,b)=>b.data.date-a.data.date);
export const pdate = d => d.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
