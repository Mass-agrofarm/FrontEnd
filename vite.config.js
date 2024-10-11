/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //* absolute path configs.
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/Components"),
    }
  },

  //* Server configs.
  server: {
    port: 3000,
    strictPort: true,
  }
})
