import { defineCollection, z } from 'astro:content';
const posts = defineCollection({ type: 'content', schema: z.object({ title: z.string(), date: z.coerce.date(), summary: z.string(), draft: z.boolean().default(false) }) });
const news = defineCollection({ type: 'content', schema: z.object({ title: z.string(), date: z.coerce.date(), summary: z.string(), source: z.string().url(), sourceName: z.string(), related: z.array(z.tuple([z.string(), z.string()])).default([]), draft: z.boolean().default(false) }) });
export const collections = { posts, news };
