import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'greeter-component'
        }
      }
    })
  ],
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'Greater',
      formats: ['cjs'],
      fileName: 'compiled-greeter-component'
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          vue: 'Vue'
        },
        intro: 'const process = { env: {} };'
      },
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }
});