// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.flino.dev",
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          es: 'es-ES',
          en: 'en-US',
          pt: 'pt-BR',
        },
      },
    }),
    solidJs(),
    tailwind({ applyBaseStyles: false })
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "pt"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});
