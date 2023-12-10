import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/axios', 'leaflet', '@googlemaps/polyline-codec','leaflet/dist/leaflet.css'],
    },
  },
});
