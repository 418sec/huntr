# Overview

`parse-server` is a version of the Parse backend that can be deployed to any infrastructure that can run Node.js.

This package are vulnerable to Improper Authorization. When using the REST API to create a new session token, that tokens is not set as restricted.
