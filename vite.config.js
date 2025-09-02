import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';  // 转换 SVG 格式图片为 React 组件
import mdx from '@mdx-js/rollup';     // 直接渲染 markdown 文件
import remarkGfm from 'remark-gfm'    // 提高 markdown 渲染的可能性
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';  // 实现图片压缩，静态打包

// const repoName = 'soluna.github.io'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    svgr(),
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkGfm]
    }),
    ViteImageOptimizer({
      png: {
        quality: 80
      },
      jpeg: {
        quality: 75
      },
      webp: {
        lossless: false,
        quality: 75
      },
      avif: {
        cqLevel: 33
      }
    }),
  ],
  base: './',
  // base: mode === 'production' ? `/${repoName}/` : '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  },
}))
