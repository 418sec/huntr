import tailwindTypography from '@tailwindcss/typography'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'huntr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    dir: '../content',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // Fixes Safari infinite hot-reload bug
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*',
      },
    },
  },

  // TailwindCSS module (https://tailwindcss.nuxtjs.org/tailwind-config#config-option)
  tailwindcss: {
    config: {
      // Use the @tailwindcss/typography plugin
      plugins: [tailwindTypography],
      variants: {
        extend: {
          fill: ['hover'],
        },
      },
      theme: {
        extend: {
          colors: {
            brand: {
              100: '#fceeea',
              200: '#fad6d2',
              300: '#f9b4a9',
              400: '#f9826f',
              500: '#ef5a4d',
              600: '#f2362c',
              700: '#d6292a',
              800: '#ac2229',
              900: '#8a1c23',
            },
          },
        },
      },
    },
  },
}
