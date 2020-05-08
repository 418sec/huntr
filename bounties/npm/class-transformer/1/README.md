
Affected versions of this package are vulnerable to Command Injection. the `classToPlainFromExist` function could be tricked into adding or modifying properties of `Object.prototype` using a `__proto__` payload.

## POC
```js
var root = require("class-transformer"); 
var payload = JSON.parse('{"__proto__": {"hjw": "jhu"}}');
root.classToPlainFromExist(payload,{}); 
console.log({}.hjw);
```
Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as  `_proto_`,  `constructor`  and  `prototype`. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values. Properties on the  `Object.prototype`  are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.


## References
-  [GitHub Permalink #1](https://github.com/typestack/class-transformer/blob/a650d9f490573443f62508bc063b857bcd5e2525/src/ClassTransformer.ts#L29-L31)