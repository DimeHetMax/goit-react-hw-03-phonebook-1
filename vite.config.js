import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default {
  base: '/goit-react-hw-03-phonebook-1/',
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components', 
    },
  },
};