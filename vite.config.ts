import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

// Local / Grok Build → base '/'
// GitHub Pages project site → '/metrostatum-landing/'
// When you later map a custom domain, set base to '/' and re-deploy.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

// Go-live switch. Unset/false = staging (noindex). Only "true" enables indexing.
const siteIndexable = process.env.SITE_INDEXABLE === "true";

const ROBOTS_STAGING = `# Preview / staging site — do not index
# This site is intentionally blocked from crawlers and AI training scrapers
# until it is ready for public launch on a custom domain.
# Driven by SITE_INDEXABLE (unset/false).

User-agent: *
Disallow: /

# Explicit AI / training crawlers
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Googlebot
Disallow: /

User-agent: Googlebot-Image
Disallow: /

User-agent: Bingbot
Disallow: /

User-agent: Anthropic-AI
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: omgili
Disallow: /

User-agent: omgilibot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: cohere-ai
Disallow: /

# No sitemap
`;

const ROBOTS_LIVE = `# Public site — indexing enabled via SITE_INDEXABLE=true

User-agent: *
Allow: /

# Add a Sitemap line only after a production domain is attached.
`;

const META_STAGING = `<!-- Staging: SITE_INDEXABLE is off. Crawlers are asked not to index. -->
    <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate" />
    <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
    <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet" />
    <meta name="googlebot-news" content="noindex, nofollow" />
    <meta name="referrer" content="no-referrer" />`;

const META_LIVE = `<!-- Public: SITE_INDEXABLE=true -->
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />`;

function siteIndexingPlugin(): Plugin {
  const stagingBlock =
    /<!-- Staging:[\s\S]*?<meta name="referrer" content="no-referrer" \/>/;

  return {
    name: "site-indexing",
    transformIndexHtml(html) {
      if (!stagingBlock.test(html)) {
        throw new Error(
          "site-indexing: expected staging robots meta block in index.html",
        );
      }
      return html.replace(
        stagingBlock,
        siteIndexable ? META_LIVE : META_STAGING,
      );
    },
    closeBundle() {
      writeFileSync(
        resolve("dist", "robots.txt"),
        siteIndexable ? ROBOTS_LIVE : ROBOTS_STAGING,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteIndexingPlugin()],
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
