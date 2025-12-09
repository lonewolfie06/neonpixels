import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // Base path for GitHub Pages at /neonpixels
  base: "/neonpixels/",
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    // Output to /docs so GitHub Pages (main branch /docs) can serve it directly
    outDir: "docs",
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});


