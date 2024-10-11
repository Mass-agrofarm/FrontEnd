import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// import { fileURLToPath } from 'url';


// Get the equivalent of __dirname in ES Modules
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //* absolute path configs.
  resolve: {
    alias: {
      // src: 'src',
      '@components': 'src/Components',
    }
  },

  //* Server configs.
  server: {
    port: 3000,
    strictPort: true,
  }
})
