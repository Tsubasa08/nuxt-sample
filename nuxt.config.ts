// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],
  css: ["assets/css/style.css"],
  app: {
    head: {
      title: "Nuxt 3 basic",
      meta: [{ name: "description", content: "Nuxt 3 for beginners" }],
    },
  },
});
