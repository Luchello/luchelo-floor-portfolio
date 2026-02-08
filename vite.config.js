import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import copyWebpOnly from './.vite-copy-webp.js'

export default defineConfig({
  plugins: [react(), tailwindcss(), copyWebpOnly()],
  base: process.env.GITHUB_PAGES ? '/luchelo-floor-portfolio/' : '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            return 'vendor'
          }
        },
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
    },
    chunkSizeWarningLimit: 600,
  },
  // Exclude JPG files from build - use only WebP
  publicDir: 'public',
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.svg'],
})
