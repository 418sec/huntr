# Overview

`cosenary/instagram` is a easy-to-use PHP Class for accessing Instagram's API, this package is vulnerable to Cross-site Scripting (XSS).

A remote attacker could inject arbitrary JavaScript into an application using the package through the `error_description` parameter within `example/success.php`.
