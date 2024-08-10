import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://futsal-backend-tylv.onrender.com',
        changeOrigin: true,
        secure: true, // since you're using https
      }
    }
  },
  plugins: [react()],
})
