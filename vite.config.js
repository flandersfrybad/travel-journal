import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/travel-journal/', // Set your repository name here
  plugins: [react()],
});