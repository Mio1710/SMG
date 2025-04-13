// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],
  // ui: {
  //   prefix: "Nuxt",
  // },
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  compatibilityDate: "2025-03-31",
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "~/assets/scss/_variables.scss" as *;',
          // api: "modern-compiler",
        },
      },
    },
  },
  experimental: {
    renderJsonPayloads: false,
  },
});
