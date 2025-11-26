import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/global-worker-greece/', // Important for GitHub Pages
  plugins: [react()],
});
