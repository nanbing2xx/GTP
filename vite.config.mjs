// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 这里也可以加一些你需要的自定义配置
  build: {
    outDir: 'public', // 打包后文件输出到 public 文件夹
  },
})
