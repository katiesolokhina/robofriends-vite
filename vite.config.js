        // vite.config.js
        import { defineConfig } from 'vite';
        import react from '@vitejs/plugin-react';

        export default defineConfig({
          base: 'robofriends-vite', // Replace 'my-vite-app' with your repository name
          plugins: [react()],
        });