# Overview

`org.webjars.npm:markdown-it-katex` is a Fast math support for markdown-it with KaTeX, this package is vulnerable to Cross-site Scripting (XSS).

It fails to properly escape error messages, which may allow attackers to execute arbitrary JavaScript in a victim's browser by triggering an error.
