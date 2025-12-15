// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://syahrezaadnanalalzhar.github.io',
  base: '/syahreza_adnan_portfolio',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  build: {
    assets: '_assets'
  }
});