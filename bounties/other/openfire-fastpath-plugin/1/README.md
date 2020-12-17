# Description

`openfire-fastpath-plugin` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Download openfire and install https://www.igniterealtime.org/downloads/
2. Run the server http://localhost:9090/index.jsp
3. Click on "Plugins" http://localhost:9090/plugin-admin.jsp and install the "fastpath" plugin.
4. Click on  "fastpath" and "create workgroup" http://localhost:9090/plugins/fastpath/workgroup-create.jsp
5. Insert payload in GWorkgroup Name:  "><ScRiPt>alert('XSS')</ScRiPt> and create workgroup
6. XSS will be triggered.
