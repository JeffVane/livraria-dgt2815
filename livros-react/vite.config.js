import react from '@vitejs/plugin-react'
import { defineConfig, transformWithEsbuild } from 'vite'

export default defineConfig({
  // precisa desse plugin porque o enunciado pede os componentes em .js
  // e o vite não transforma JSX em .js sozinho
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    react(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
  },
})
