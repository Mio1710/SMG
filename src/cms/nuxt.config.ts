// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: false },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/eslint",
  ],
  compatibilityDate: "2025-03-31",
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // experimental: {
  //   renderJsonPayloads: false,
  // },
});
