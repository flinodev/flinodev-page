// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.flino.dev",
  // Static por defecto (Astro 5); las rutas server usan `export const prerender = false`
  adapter: vercel(),
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});
