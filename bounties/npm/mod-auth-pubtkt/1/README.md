# Overview

[mod-auth-pubtkt](https://github.com/manuelkasper/mod_auth_pubtkt/) is a pragmatic Web Single Sign-On (SSO) solution

The SSO solution is a simple `login panel` which accepts the `back` parameter (both POST and GET) to redirect the user after being logged-in.
The redirection is checked through a `regex`, which can be bypassable, leading to `open redirect` since the attacker could redirect a victim logging-in on the `secure.com` domain to the `un-secure.com`. This could result in `token` stealing and similar issues

