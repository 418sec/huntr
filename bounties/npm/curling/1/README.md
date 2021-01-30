# Overview

curling is a node wrapper for curl with a very simple api. Affected versions of this package are vulnerable to Command Injection via the `run(command,cb)` function. The `command` argument can be controlled by users without any sanitization.
