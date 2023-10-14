import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://pages.github.com/jsanchezpc',
	base: '/blogt',
	integrations: [mdx(), sitemap()],
});
