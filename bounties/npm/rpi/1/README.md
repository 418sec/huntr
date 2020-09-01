# Description
```rpi``` is a Node.js library to use the Raspberry Pi GPIOs.
There is a ```command injection``` vulnerability in this package. There is an unsanitized ```exec``` in ```gpio.js```. The ```pinNumber``` variable passed to exec is unsanitized thus leading to ```code execution```.

# Proof-of-Concept
```
var RPI = require('rpi');
var pin = new RPI.GPIO(';whoami > HACKED.txt;','123');
```
