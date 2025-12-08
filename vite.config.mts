import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Vite configuration for the NeonPixel Arcade project
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});


