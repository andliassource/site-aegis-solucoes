/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    /*
     * We use 'happy-dom' for browser-like environments.
     * For Astro component tests, we override this to 'node'
     * using a comment at the top of the test file, like:
     * // @vitest-environment node
     */
    environment: 'happy-dom',
    globals: true,
  },
});