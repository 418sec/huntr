# Overview

`X-editable` is a package for In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery.

This package is vulnerable to Cross-site Scripting (XSS). The validation of a json string is made poorly as it only checks the beginning and ending of a string to be `[]` or `{}`.
