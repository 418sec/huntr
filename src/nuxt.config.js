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
  plugins: ['plugins/chatwoot.js', 'plugins/cypress.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/dansmaculotte/nuxt-segment
    '@dansmaculotte/nuxt-segment',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
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

  segment: {
    writeKey: 'VWwEgATDMwku1jvgt0soCRaORr8xbOyx',
    disabled: process.env.NODE_ENV === 'development',
  },

  auth: {
    redirect: {
      login: false,
      logout: false,
      home: '/profile/',
      callback: '/auth/callback/',
    },
    strategies: {
      cognito: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://auth.huntr.dev/oauth2/authorize',
          token: 'https://auth.huntr.dev/oauth2/token',
          userInfo: 'https://auth.huntr.dev/oauth2/userInfo',
          logout: 'https://auth.huntr.dev/logout',
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: '3515589jstkcr0dhh1ehlcurm0',
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256',
      },
    },
  },
}
