import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/ViasLibereDesignare/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works/index.html'),
        worksDetail: resolve(__dirname, 'works/detail.html'),
      },
    },
  },
});
