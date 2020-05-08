# Overview
[openid-connect-server-webapp](https://github.com/mitreid-connect/OpenID-Connect-Java-Spring-Server) is a certified OpenID Connect reference implementation in Java on the Spring platform.

Affected versions of this package are vulnerable to Cross Site Scripting (XSS) due to `userInfoJson` being included in the page and unsanitized in the `header.tag`.