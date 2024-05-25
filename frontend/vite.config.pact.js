import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/src/contract-tests/**",],
    globals: true,
    environment: "jsdom",
  },
});
