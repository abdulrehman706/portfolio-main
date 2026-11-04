import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
const site = process.env["ORIGIN"] ?? "https://abdulrehmandev.me";

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Archivo",
      cssVariable: "--font-body",
      weights: ["100 900"],
      styles: ["normal", "italic"],
    },
    {
      provider: fontProviders.google(),
      name: "Rubik",
      cssVariable: "--font-heading",
      weights: ["700 800"],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Space Mono",
      cssVariable: "--font-mono-game",
      weights: [400, 700],
      styles: ["normal"],
    },
  ],
  integrations: [
    mdx({
      shikiConfig: {
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        defaultColor: false,
      },
    }),
    sitemap(),
  ],
});
