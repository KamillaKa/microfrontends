import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'player',
      remotes: {
        mediastore: 'mediastore@http://localhost:3001/remoteEntry.js',
      },
      filename: 'remoteEntry.js',
      exposes: {
        './PlayerButton': './src/components/player/VideoButtons',
        './Player': './src/components/player/VideoPlayer',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],

  server: {
    port: 3011, // Set the desired port here
  },
  preview: {
    port: 3006, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
