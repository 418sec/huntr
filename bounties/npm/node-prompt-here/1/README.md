# Overview

`node-prompt-here` is a package to open a console window at given absolute directory, this package are vulnerable to Command Injection.

The `open()` function contains a vulnerable line of code which concatenates insecure user-supplied inputs without any check, leading to Remote Code Execution (RCE).
