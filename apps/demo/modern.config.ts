import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  source: {
    disableDefaultEntries: true,
    entries: {
      index: {
        entry: './src/index.ts',
        disableMount: true,
      },
    },
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'webpack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
  ],
});
