import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

// https://vite.dev/config/
export default defineConfig({
  base: '/Soluna/',
  plugins: [
    react(),
    svgr(),
    mdx({
      remarkPlugins: [remarkGfm]
    })],
  resolve: {
    alias: { '@': '/images' } // 可选，方便写路径
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
})
