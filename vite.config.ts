import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [
    react(),
    envCompatible({ prefix: 'REACT_APP_' }) // если хотите сохранить старые переменные окружения
  ],
  server: {
    port: 3000, // порт как в CRA
    open: true,
  },
});