# Description

`openfire-dbaccess-plugin` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Download openfire and install https://www.igniterealtime.org/downloads/
2. Run the server http://localhost:9090/index.jsp
3. Click on "Plugins" http://localhost:9090/plugin-admin.jsp and install the "DB Access" plugin.
4. Click on "Server" and navigate to "DB Access" http://localhost:9090/plugins/dbaccess/db-access.jsp
5. Insert payload in SQL Statement: a"><ScRiPt>alert('XSS')</ScRiPt> and execute
6. XSS will be triggered.
