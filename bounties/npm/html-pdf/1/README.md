# Overview

html-pdf is a Html to pdf converter in Node.js, this package is vulnerable to Arbitrary File Read.

The package fails to sanitize the HTML input, allowing attackers to exfiltrate server files by supplying malicious HTML code. XHR requests in the HTML code are executed by the server. Input with an XHR request such as `request.open("GET","file:///etc/passwd")` will result in a PDF document with the contents of `/etc/passwd`.
