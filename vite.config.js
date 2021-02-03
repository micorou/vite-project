import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
    'components': path.resolve(__dirname, 'src/components'),
    'apis': path.resolve(__dirname, 'src/apis'),
    'views': path.resolve(__dirname, 'src/views'),
    'utils': path.resolve(__dirname, 'src/utils'),
    'routes': path.resolve(__dirname, 'src/routes'),
    'styles': path.resolve(__dirname, 'src/styles'),
  },
  plugins: [vue()]
})
