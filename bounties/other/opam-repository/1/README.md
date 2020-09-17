# Description
This repository contains OCaml package and compiler metadata and is used by the default installation of opam. opam is a source-based package manager for OCaml. It supports multiple simultaneous compiler installations, flexible package constraints, and a Git-friendly development workflow. This package is vulnerable to Man in the Middle (MITM) attacks due to downloading resources over an insecure protocol.
It is possible for an attacker to intercept and alter the packages which may leads to RCE / other attacks which may help the attacker gain access to host.

# Lines
* https://github.com/ocaml/opam-repository/blob/master/packages/ocaml-variants/ocaml-variants.4.00.1+french/opam
* https://github.com/ocaml/opam-repository/blob/master/packages/ocaml-variants/ocaml-variants.4.00.1+annot/opam
* https://github.com/ocaml/opam-repository/blob/master/packages/ocaml-variants/ocaml-variants.4.00.1+raspberrypi/opam
* https://github.com/ocaml/opam-repository/blob/master/packages/ocaml-variants/ocaml-variants.4.00.0+fp/opam
* https://github.com/ocaml/opam-repository/blob/master/packages/dypgen/dypgen.20120619-1/opam
* https://github.com/ocaml/opam-repository/blob/master/packages/liquidsoap/liquidsoap.1.3.3-1/opam
# Referance
* [onetwoseven](https://0xrick.github.io/hack-the-box/onetwoseven/)