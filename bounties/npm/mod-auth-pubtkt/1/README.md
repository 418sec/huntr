# Overview

[mod-auth-pubtkt](https://github.com/manuelkasper/mod_auth_pubtkt/) is a pragmatic Web Single Sign-On (SSO) solution

The redirection is checked through a `regex`, which is bypassable, leading to `open redirect` since the attacker could redirect a victim logging-in on the `secure.com` domain to the `un-secure.com` domain, resulting in possible `token` stealing and similar issues.