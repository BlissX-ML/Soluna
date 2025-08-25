import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

const repoName = 'soluna.github.io'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr(),
    mdx({
      remarkPlugins: [remarkGfm]
    })
  ],
  base: mode === 'production' ? `/${repoName}/` : '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
}))
