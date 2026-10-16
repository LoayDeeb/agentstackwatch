import { defineConfig } from 'astro/config';
// Served from the custom domain https://agentstackwatch.com (GitHub Pages, public/CNAME).
export default defineConfig({ site: 'https://agentstackwatch.com', base: '/', build: { format: 'directory' } });
