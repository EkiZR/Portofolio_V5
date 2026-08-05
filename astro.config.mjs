// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Every component here is a zero-JS .astro component, so there is no UI
// framework integration. The only client-side script on the site is the ~15-line
// scroll reveal in BaseLayout. Add @astrojs/react back if an island ever earns it.
export default defineConfig({
  site: 'https://sajidalam.co.uk',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets/scripts so the critical path is a single request.
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
