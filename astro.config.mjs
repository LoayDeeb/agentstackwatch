import { defineConfig } from 'astro/config';
// BASE_PATH is set in CI for GitHub Pages project hosting (https://loaydeeb.github.io/agentstackwatch/).
const base = process.env.BASE_PATH || '/';
export default defineConfig({ site: process.env.SITE_URL || 'https://loaydeeb.github.io', base, build: { format: 'directory' } });
