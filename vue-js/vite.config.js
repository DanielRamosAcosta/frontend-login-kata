import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    exclude: ["**/node_modules/**", "**/e2e/**"],
    globals: true,
  },
});
