
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
    // Otimizações críticas de performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui-components': [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-toast', 
            '@radix-ui/react-accordion',
            '@radix-ui/react-progress',
            '@radix-ui/react-select'
          ],
          'icons': ['lucide-react'],
          'charts': ['recharts'],
          'forms': ['react-hook-form', '@hookform/resolvers'],
          'email': ['@emailjs/browser']
        }
      }
    },
    // Compressão e minificação otimizada
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    // Otimizações de assets críticas
    assetsInlineLimit: 2048, // Reduzido para melhor cache
    chunkSizeWarningLimit: 800, // Mais rigoroso
    cssCodeSplit: true,
    sourcemap: mode === 'development',
    // Configurações de output otimizadas
    target: 'es2020',
    cssMinify: 'lightningcss'
  },
  // Otimizações de dependências críticas
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
  // Configurações de CSS otimizadas
  css: {
    devSourcemap: mode === 'development',
    preprocessorOptions: {
      css: {
        // Otimizações CSS
        charset: false
      }
    }
  },
  // Configurações de performance
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none'
  }
}));
