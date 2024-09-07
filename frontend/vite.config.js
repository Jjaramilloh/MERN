import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Permite que Vite escuche en todas las interfaces de red
    port: 3000,
  },
  preview: {
    port: 3000, // Cambia a 3000 o el puerto que prefieras
  }
})
