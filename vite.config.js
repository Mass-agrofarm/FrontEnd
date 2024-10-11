import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //* absolute path configs.
  resolve: {
    alias: {
      src: 'src',
    }
  },

  //* Server configs.
  server: {
    port: 3000,
    strictPort: true,
  }
})
