# Overview

`omniauth-rails` is a Rails Engine to make it as easy as possible to add OAuth authentication to a Rails app.

This package is vulnerable to Cross-site Request Forgery (CSRF), an attacker may be allowed to be connected to the user without the user's permission. This allows a secondary account to be able to sign into the Web Application as the primary account.
