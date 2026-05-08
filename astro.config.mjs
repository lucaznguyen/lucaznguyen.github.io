import { defineConfig } from 'astro/config';

// For the user/organization GitHub Pages repository lucaznguyen.github.io,
// keep `base` undefined. If deploying to a project repo, add base: '/repo-name'.
export default defineConfig({
  site: 'https://lucaznguyen.github.io',
  output: 'static'
});
