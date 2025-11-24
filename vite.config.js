import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    // Output to docs so GitHub Pages can serve from main branch
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Fix esbuild trying to use an unsupported "html" loader by treating
  // imported .html files as plain text during dependency optimization.
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.html': 'text',
      },
    },
  },
});
