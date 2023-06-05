export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  app: {
    head: {
      title: "Alibaba",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
      meta: [
        {
          property: "og:title",
          content:
            "Alibaba.com: Manufacturers, Supliers, Exporters & Importers",
        },
      ],
    },
  },
});