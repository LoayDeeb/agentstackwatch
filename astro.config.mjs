import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Served from the custom domain https://agentstackwatch.com (GitHub Pages, public/CNAME).
export default defineConfig({ site: 'https://agentstackwatch.com', base: '/', build: { format: 'directory' }, integrations: [sitemap()] });
