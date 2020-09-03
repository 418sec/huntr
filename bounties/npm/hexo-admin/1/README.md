# Overview

`hexo-admin` is a Admin Interface for Hexo, this package are vulnerable to Cross-site Scripting (XSS).

It fails to sanitize rendered markdown, allowing attackers to execute arbitrary JavaScript code in a browser when they create a new post.
