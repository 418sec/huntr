# Overview

`timespan` is a JavaScript TimeSpan library for Node.js.

This package is vulnerable to Regular expression Denial of Service (ReDoS). It parses dates using regex strings, which may cause a slowdown of 10 seconds per 50,000 characters.
