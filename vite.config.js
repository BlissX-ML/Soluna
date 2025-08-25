import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

const isProd = process.env.NODE_ENV === 'production'

// https://vite.dev/config/
export default defineConfig({
  base: isProd ? '/Soluna/' : '/',
  plugins: [
    react(),
    svgr(),
    mdx({
      remarkPlugins: [remarkGfm]
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
})
