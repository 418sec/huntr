// https://stackoverflow.com/questions/55516880/how-to-expose-vuex-store-of-nuxt-app-to-cypress

const isCypress = typeof window.Cypress !== 'undefined'

// export default ({ store }) => {
export default (context) => {
  if (context.isDev && isCypress) {
    window.nuxtApp = context
  }
}
