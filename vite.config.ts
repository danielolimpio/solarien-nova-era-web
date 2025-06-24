
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-toast', 
            '@radix-ui/react-accordion',
            '@radix-ui/react-progress',
            '@radix-ui/react-select'
          ],
          'icons': ['lucide-react'],
          'charts': ['recharts'],
          'forms': ['react-hook-form', '@hookform/resolvers'],
          'email': ['@emailjs/browser'],
          'utils': ['class-variance-authority', 'clsx', 'tailwind-merge']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info', 'console.warn'] : [],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        hoist_funs: true,
        reduce_vars: true,
        collapse_vars: true
      },
      mangle: {
        safari10: true,
        toplevel: true
      },
      format: {
        comments: false
      }
    },
    assetsInlineLimit: 1024,
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2020',
    reportCompressedSize: false
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@tanstack/react-query',
      '@emailjs/browser'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  }
}));
