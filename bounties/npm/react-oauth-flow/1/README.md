# Overview
react-oauth-flow is a small library to simplify the use of OAuth2 authentication inside your react applications.
This package has been deprecated by the maintainer.
Affected versions of this package are vulnerable to Improper Authorization.
It fails to properly implement the OAuth protocol. The package stores secrets in the front-end code. Instead of using a public OAuth client, it uses a confidential client on the browser.