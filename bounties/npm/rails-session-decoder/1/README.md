# Overview

`rails-session-decoder` is a simple utility for decoding Rails 4.x sessions in Node.js, this package are vulnerable to Information Exposure.

Missing verification of the Message Authentication Code appended to the cookies may lead to decryption of cipher text, exposing encrypted information.
