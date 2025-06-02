import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  publicDir: 'public',
  server: {
    fs: {
      allow: ['..']
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Disposition': 'inline',
      'Cache-Control': 'no-cache'
    }
  },
  optimizeDeps: {
    exclude: ['@react-pdf-viewer/core']
  }
})
