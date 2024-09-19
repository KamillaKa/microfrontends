import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'player',
      filename: 'remoteEntry.js',
      exposes: {
        './PlayerButton': './src/components/player/VideoButtons',
        './Player': './src/components/player/VideoPlayer',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],

  base: '/~ilkkamtk/juutube/',
  server: {
    port: 3011, // Set the desired port here
  },
  preview: {
    port: 30, // Set the desired port here
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
