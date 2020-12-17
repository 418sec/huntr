export default ({ isDev }) => {
  if (!isDev) {
    ;(function (d, t) {
      const BASE_URL = 'https://app.chatwoot.com'
      const g = d.createElement(t)
      const s = d.getElementsByTagName(t)[0]
      g.src = BASE_URL + '/packs/js/sdk.js'
      s.parentNode.insertBefore(g, s)
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: 'puTnMCiAd9DHeNuoWk2mzm6X',
          baseUrl: BASE_URL,
        })
      }
    })(document, 'script')

    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'en', // Language to be set
      type: 'standard', // [standard, expanded_bubble]
    }
  }
}
