# Overview

Affected versions of this package are vulnerable to Stored Cross-site Scripting (XSS). Since there was no sanitizations performed on filenames, an attacker can include filenames with malicious js code which gets executed when browsed to the file over the web browser
