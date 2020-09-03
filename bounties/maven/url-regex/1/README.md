# Overview

`org.webjars.npm:url-regex` is a package with regular expression for matching URLs.

This package is vulnerable to Regular Expression Denial of Service (ReDoS). An attacker providing a very long string in `String.test` can cause a Denial of Service (DoS).
