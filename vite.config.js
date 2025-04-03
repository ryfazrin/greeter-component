import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'greeter-component'
        }
      }
    }),
    copy({
      targets: [
        { 
          src: 'demo/index.html', 
          dest: 'dist/demo',
          rename: 'index.html' 
        }
      ],
      hook: 'writeBundle'
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