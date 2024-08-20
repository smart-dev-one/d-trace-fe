import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/context': path.resolve(__dirname, 'src/context'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/layout': path.resolve(__dirname, 'src/layout'),
      '@/hook': path.resolve(__dirname, 'src/hook'),
      '@/store': path.resolve(__dirname, 'src/store'),
    },
  },
});
