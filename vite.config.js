import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteCSSPlugin from 'vite-plugin-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteCSSPlugin],
  build: {
    rollupOptions: {
      external: ['axios', 'leaflet', '@googlemaps/polyline-codec'],
    },
  },
});
