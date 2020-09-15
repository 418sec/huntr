# Description
Bower offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat. This package is vulnerable to Man in the Middle (MITM) attacks due to downloading resources over an insecure protocol.
It is possible for an attacker to intercept and alter the packages which may leads to RCE / other attacks which may help the attacker gain access to host.

# List of Modules using insecure Protocol 
* [package 1](https://github.com/bower/bower/blob/master/test/core/resolvers/urlResolver.js)

# Referance
* [onetwoseven](https://0xrick.github.io/hack-the-box/onetwoseven/) , its a box in HTB which demonstrates gaining access to the target with insecure file download.