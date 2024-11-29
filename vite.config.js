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
      "@components": path.resolve(__dirname, "src", "Components"),
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@assets/images": path.resolve(__dirname, "src", "assets", "Images"),
      "@pages": path.resolve(__dirname, "src", "Pages"),
      "public": path.resolve(__dirname, "public"),
      // "@data": path.resolve(__dirname, "src", "Data"),
    }
  },

  //* Server configs.
  server: {
    port: 3000,
    strictPort: true,
  }
})
