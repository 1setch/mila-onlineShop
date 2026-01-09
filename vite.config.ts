import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/shared/styles/variables";
          @import "@/shared/styles/mixins";
          @import "@/shared/styles/media";
          @import "@/shared/styles/normalize";
        `,
      },
    },
  },
});
