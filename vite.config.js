import { defineConfig } from "vite"; // Import defineConfig from Vite
import react from "@vitejs/plugin-react"; // Import the react plugin

export default defineConfig({
  plugins: [react()], // Use the react plugin
  build: {
    outDir: "dist", // Output folder for build
    rollupOptions: {
      external: [],
    },
  },
});
