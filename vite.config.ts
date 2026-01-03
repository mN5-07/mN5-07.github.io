import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Fixed root base – correct for mN5-07.github.io (user site)
  plugins: [
    react(),
    tailwindcss(),  // Required for Tailwind v4 – keep it!
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})