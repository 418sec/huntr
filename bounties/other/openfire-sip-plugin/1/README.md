# Description

`openfire-sip-plugin` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Download openfire and install https://www.igniterealtime.org/downloads/
2. Run the server http://localhost:9090/index.jsp
3. Click on "Plugins" http://localhost:9090/plugin-admin.jsp and install the "SIP phone" plugin.
4. Click on  "Server" -> "SIP" http://localhost:9090/plugins/sip/create-sipark-mapping.jsp
5. Insert payload in XMPP username:  `aaaaa"<ScRiPt>alert('XSS')</ScRiPt>` and fill the other fields and click on create
6. XSS will be triggered. And when u visit the SIP XSS will be triggered everytime.
