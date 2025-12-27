import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Daftarin semua halaman kamu di sini:
        main: resolve(__dirname, 'indexs.html'),
        login: resolve(__dirname, 'login.html'),
        dashboard: resolve(__dirname, 'dahsboard.html'),
        chat: resolve(__dirname, 'chat.html'),
        pembayaran: resolve(__dirname, 'pembayaran.html'),
        // Kalau ada lagi, tambah di bawah sini...
      },
    },
  },
})