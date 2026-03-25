import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    // Optimize for faster load on mobile
    target: 'es2020',
    rollupOptions: {
      output: {
        // Split vendor code for better browser caching
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            if (id.includes('react-router')) return 'vendor-router';
            if (id.includes('react-icons')) return 'vendor-icons';
            return 'vendor-other';
          }
        }
      }
    }
  }
})
