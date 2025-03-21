import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or your framework's plugin

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/travel-journal/' : '/' // Add this line
});