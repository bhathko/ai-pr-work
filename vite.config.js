import { defineConfig } from 'vite'
import { resolve } from 'path'

// 這份 deck 是單一 HTML(ppt/index.html),把 ppt/ 當作網站根目錄。
// Vite 用 http 服務 → 本機 motion.min.js(ES module)不會再被 file:// 的 CORS 擋住,
// 動效即使離線也能跑;字體 / Lucide 圖示仍走 CDN,連網時才會顯示。
export default defineConfig({
  root: 'ppt',
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'ppt/index.html'),
        magazine: resolve(__dirname, 'ppt/index-magazine-A.html'),
      },
    },
  },
  server: {
    port: 5173,
    host: true,   // WSL2 / 區網也能連
    open: false,
  },
})
