# Overview
fun-map is a functional utilities for pretending that JS objects are Clojure string maps.
Affected versions of this package are vulnerable to Prototype Pollution.
The function assocInM could be tricked into adding or modifying properties of Object.prototype using a __proto__ payload.

## Proof of Concept
var a %3D require("fun-map%22);
a.assocInM({},["__proto__","toString"],"JHU%22);
console.log({}.toString);Details
Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes%2C such as objects. JavaScript allows all Object attributes to be altered%2C including their magical attributes such as _proto_%2C constructor and prototype. An attacker manipulates these attributes to overwrite%2C or pollute%2C a JavaScript application object prototype of the base object by injecting other values.  Properties on the Object.prototype are then inherited by all the JavaScript objects through the prototype chain. When that happens%2C this leads to either denial of service by triggering JavaScript exceptions%2C or it tampers with the application source code to force the code path that the attacker injects%2C thereby leading to remote code execution.
There are two main ways in which the pollution of prototypes occurs%3A

Unsafe Object recursive merge

Property definition by path


Unsafe Object recursive merge
The logic of a vulnerable recursive merge function follows the following high-level model%3A
merge (target%2C source)

  foreach property of source

    if property exists and is an object on both the target and the source

      merge(target[property%5D%2C source[property%5D)

    else

      target[property%5D %3D source[property]<br>  


When the source object contains a property named _proto_ defined with Object.defineProperty() %2C the condition that checks if the property exists and is an object on both the target and the source passes and the merge recurses with the target%2C being the prototype of Object and the source of Object as defined by the attacker. Properties are then copied on the Object prototype.
Clone operations are a special sub-class of unsafe recursive merges%2C which occur when a recursive merge is conducted on an empty object%3A merge({}%2Csource).
lodash and Hoek are examples of libraries susceptible to recursive merge attacks.
Property definition by path
There are a few JavaScript libraries that use an API to define property values on an object based on a given path. The function that is generally affected contains this signature%3A theFunction(object%2C path%2C value)
If the attacker can control the value of %u201Cpath%u201D%2C they can set this value to _proto_.myValue. myValue is then assigned to the prototype of the class of the object.
Types of attacks
There are a few methods by which Prototype Pollution can be manipulated%3A



Type
Origin
Short description



Denial of service (DoS)
Client
This is the most likely attack. <br>DoS occurs when Object holds generic functions that are implicitly called for various operations (for example%2C toString and valueOf). <br> The attacker pollutes Object.prototype.someattr and alters its state to an unexpected value such as Int or Object. In this case%2C the code fails and is likely to cause a denial of service.  <br>For example%3A if an attacker pollutes Object.prototype.toString by defining it as an integer%2C if the codebase at any point was reliant on someobject.toString() it would fail.


Remote Code Execution
Client
Remote code execution is generally only possible in cases where the codebase evaluates a specific attribute of an object%2C and then executes that evaluation.<br>For example%3A eval(someobject.someattr). In this case%2C if the attacker pollutes Object.prototype.someattr they are likely to be able to leverage this in order to execute code.


Property Injection
Client
The attacker pollutes properties that the codebase relies on for their informative value%2C including security properties such as cookies or tokens.<br>  For example%3A if a codebase checks privileges for someuser.isAdmin%2C then when the attacker pollutes Object.prototype.isAdmin and sets it to equal true%2C they can then achieve admin privileges.


Affected environments
The following environments are susceptible to a Prototype Pollution attack%3A

Application server

Web server


How to prevent

Freeze the prototype%u2014 use Object.freeze (Object.prototype).

Require schema validation of JSON input.

Avoid using unsafe recursive merge functions.

Consider using objects without prototypes (for example%2C Object.create(null))%2C breaking the prototype chain and preventing pollution.

As a best practice use Map instead of Object.


For more information on this vulnerability type%3A
Arteau%2C Oliver. %u201CJavaScript prototype pollution attack in NodeJS application.%u201D GitHub%2C 26 May 2018