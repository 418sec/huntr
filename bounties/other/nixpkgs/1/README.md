# Description
Nixpkgs is a collection of over 40,000 software packages that can be installed with the Nix package manager. It also implements NixOS, a purely-functional Linux distribution. This package is vulnerable to Man in the Middle (MITM) attacks due to downloading resources over an insecure protocol.
It is possible for an attacker to intercept and alter the packages which may leads to RCE / other attacks which may help the attacker gain access to host.

# List of Modules using insecure Protocol 
* [package 1](https://github.com/NixOS/nixpkgs/blob/master/pkgs/applications/office/libreoffice/src-fresh/download.nix)

# Referance
* [onetwoseven](https://0xrick.github.io/hack-the-box/onetwoseven/) , its a box in HTB which demonstrates gaining access to the target with insecure file download.