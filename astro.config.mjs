// @ts-check
import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://individual-life.org",

  adapter: cloudflare({
    imageService: {
      build: "compile",
      runtime: "cloudflare-binding",
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },
})
