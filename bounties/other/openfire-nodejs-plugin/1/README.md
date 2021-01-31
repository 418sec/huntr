# Description

`openfire-nodejs-plugin` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Download openfire and install https://www.igniterealtime.org/downloads/
2. Run the server http://localhost:9090/index.jsp
3. Click on "Plugins" http://localhost:9090/plugin-admin.jsp and install the "NodeJS" plugin.
4. Click on "Server" and navigate to "NodeJS" http://localhost:9090/plugins/nodejs/nodejs.jsp
5. Insert payload in Path: "><ScRiPt>alert('XSS')</ScRiPt> and save
6. XSS will be triggered.
