// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],

  runtimeConfig: {
    public: {
      gtagId: process.env.GTAG_ID || 'XXXXXXXX',
      DEVELOPMENT_MODE: process.env.DEVELOPMENT_MODE,
    }
  },

  plugins: [
    '~/plugins/gtag.client.js',
  ],
  app: {
    head: {
      title:
        'Counter strike 2',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: `Text.`,
        },
        {
          property: 'og:title',
          content: `TEXT.`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],

  googleFonts: {
    families: {
      Ubuntu: [400, 700]
    },
    display: 'swap'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
