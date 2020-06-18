# Overview

[Dzzoffice](http://dzzoffice.com/) is an open source office suite, suitable for enterprises and teams to build their own enterprise collaborative office platforms like "Google Enterprise Application Suite" and "Microsoft Office365"

The `dzzoffice` project is vulnerable against `XSS`,occurring when changing the `organization name`.
The XSS can be triggered only if you're authenticated, but it's possible to invite other users to the platform, increasing severity from `self-XSS` to `XSS`.

The issue could also lead to `account takeover` using the CSS selectors to get the `formsha` value and then send auth requests on the behalf of the victim, leading to change of the email and then `account takeover`

