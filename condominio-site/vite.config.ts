import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  // SOLUÇÃO DEFINITIVA PARA ROTAS:
  preview: {
    port: 5173,
    strictPort: true,
  }
})