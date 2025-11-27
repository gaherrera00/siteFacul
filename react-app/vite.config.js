import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: resolve(__dirname, '../img'),
  server: {
    port: 5173,
    open: false,
  },
});
