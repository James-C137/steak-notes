// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://james-c137.github.io',
  base: '/steak-notes',
  integrations: [mdx(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});