import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://football-news-2026.netlify.app',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    },

    plugins: [tailwindcss()]
  }
});