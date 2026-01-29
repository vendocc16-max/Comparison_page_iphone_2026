import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * Vite configuration supporting multiple build modes:
 * - SPA (default): npm run build → standalone app
 * - Library: npm run build:lib → importable component
 * - Iframe-ready: npm run build → can be embedded via iframe
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    port: 5173,
    open: true,
    // CORS headers for iframe testing
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
  // Environment-specific configuration
  define: {
    __VERSION__: JSON.stringify(process.env.npm_package_version),
    __INTEGRATION_MODE__: JSON.stringify(
      process.env.VITE_INTEGRATION_MODE || 'iframe'
    ),
  },
});
