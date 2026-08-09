import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// Local / Grok Build → base '/'
// GitHub Pages project site → '/metrostatum-landing/'
// When you later map a custom domain, set base to '/' and re-deploy.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? "/metrostatum-landing/" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
});
