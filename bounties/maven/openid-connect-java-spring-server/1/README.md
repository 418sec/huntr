## Overview
[openid-connect-server-webapp](https://github.com/mitreid-connect/OpenID-Connect-Java-Spring-Server) is a certified OpenID Connect reference implementation in Java on the Spring platform.

Affected versions of this package are vulnerable to Cross Site Scripting (XSS) due to  `userInfoJson`  being included in the page unsanitized in the  `header.tag`.
## References
-   [GitHub Issue](https://github.com/mitreid-connect/OpenID-Connect-Java-Spring-Server/issues/1521)
-   [Vulnerable Code](https://github.com/mitreid-connect/OpenID-Connect-Java-Spring-Server/blob/a2e8cb1a67a5546fdef11c604142a847e7c61261/openid-connect-server-webapp/src/main/webapp/WEB-INF/tags/header.tag#L56)
