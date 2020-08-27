# Overview
fine-uploader is a npm package for upload.
Note: This project is no longer maintained and the the package should be considered deprecated.
Affected versions of this package are vulnerable to Prototype Pollution.
Given a value such as __proto__, this value is used by the  extend function without any prior validation. __proto__ will modify the properties of all existing properties and new properties resulting in pollution of an object's prototype.

# Proof of Concept
//https://docs.fineuploader.com/branch/master/api/qq.html#qq.extend
var payload = JSON.parse('{"__proto__": {"a": "polluted"}}');
var new = qq.extend({}, payload);
console.log({}.a);