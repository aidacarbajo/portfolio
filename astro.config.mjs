import { defineConfig } from 'astro/config';

// On Vercel the production domain is provided at build time; locally we fall back to the dev server.
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: host ? `https://${host}` : 'http://localhost:4321',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
