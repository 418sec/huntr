# Overview

fun-map is a functional utilities for pretending that JS objects are Clojure string maps.

Affected versions of this package are vulnerable to Prototype Pollution.
The function assocInM could be tricked into adding or modifying properties of Object.prototype using a **proto** payload.
