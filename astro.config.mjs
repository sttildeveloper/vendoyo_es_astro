// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://vendoyo.com', // Update with actual domain
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    icon({
      include: {
        heroicons: ['*'],
        lucide: ['*'],
        'circle-flags': ['*'],
      },
    }),
    compress({
      CSS: true,
      HTML: true,
      Image: false, // Let Astro handle image optimization
      JavaScript: true,
      SVG: true,
    }),
  ],
});
