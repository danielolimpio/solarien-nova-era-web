
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // Split router separately
          if (id.includes('node_modules/react-router-dom/')) {
            return 'router';
          }
          // Split Radix UI components into smaller chunks
          if (id.includes('@radix-ui/react-dialog')) return 'ui-dialog';
          if (id.includes('@radix-ui/react-toast')) return 'ui-toast';
          if (id.includes('@radix-ui/react-accordion')) return 'ui-accordion';
          if (id.includes('@radix-ui/react-progress')) return 'ui-progress';
          if (id.includes('@radix-ui/react-select')) return 'ui-select';
          if (id.includes('@radix-ui/')) return 'ui-other';
          // Split icons
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          // Split charts
          if (id.includes('recharts')) {
            return 'charts';
          }
          // Split forms
          if (id.includes('react-hook-form') || id.includes('@hookform/resolvers')) {
            return 'forms';
          }
          // Split email
          if (id.includes('@emailjs/browser')) {
            return 'email';
          }
          // Split utilities
          if (id.includes('class-variance-authority') || id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils';
          }
          // Split other node_modules into smaller chunks
          if (id.includes('node_modules')) {
            return 'vendor-other';
          }
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    minify: true,
    assetsInlineLimit: 4096,
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
      'react/jsx-runtime',
      'react-router-dom',
      'lucide-react',
      '@tanstack/react-query',
      '@emailjs/browser'
    ],
    exclude: ['@vite/client', '@vite/env'],
    force: true
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
    minifyIdentifiers: mode === 'production',
    minifySyntax: mode === 'production',
    minifyWhitespace: mode === 'production'
  }
}));
