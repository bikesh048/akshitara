import { defineConfig } from "astro/config";
import tailwindcss from "@astrojs/tailwind";
// import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [tailwindcss()], // vite: {
  //   plugins: [tailwindcss()],
  // },
  site: "https://bikesh048.github.io",
  // base: "/ucf",
  publicDir: "./public",
  output: "static",
  // outDir: "./docs",
  build: {
    assets: "astro",
  },
});
