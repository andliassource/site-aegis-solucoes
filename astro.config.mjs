import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpine from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [tailwind(), alpine()],
  trailingSlash: 'always',
});