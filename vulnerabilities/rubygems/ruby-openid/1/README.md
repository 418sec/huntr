[ruby-openid](https://github.com/openid/ruby-openid)  is a library for consuming and serving OpenID identities.

Affected versions of this package are vulnerable to Server Side Request Forgery (SSRF) via the Yadis consumer discovery functionality provided by the gem. A lack of verification can lead to a forged assertion request being manipulated to the value of the  `claimed_id`  URL parameter which can be exploited with SSRF attacks. Developers who based their OpenID integration heavily on the "example app" provided by the project are at highest risk.

## References
-   [GitHub Issue](https://github.com/openid/ruby-openid/issues/122#issuecomment-520304211)
-   [HP Security Bulletin](https://marc.info/?l=openid-security&m=155154717027534&w=2)