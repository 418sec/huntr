# Overview

fun-map is a functional utilities for pretending that JS objects are Clojure string maps.

This package is vulnerable to Prototype Pollution. The function `assocInM` could be taken advantage of by adding or modifying properties of `Object.prototype` using a `proto` payload.
