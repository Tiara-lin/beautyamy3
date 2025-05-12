import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/beautyamy3/',     // ✅ 你的 repo 名
  plugins: [react()],
});
