# Description

`openfire-userCreation-plugin` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Download openfire and install https://www.igniterealtime.org/downloads/
2. Run the server http://localhost:9090/index.jsp
3. Click on "Plugins" http://localhost:9090/plugin-admin.jsp and install the "userCreation" plugin.
4. Click on  "User/Groups" and "Users Creation" http://localhost:9090/plugins/usercreation/users-creation.jsp
5. Insert payload in User prefix:  "><ScRiPt>alert('XSS')</ScRiPt> and submit
6. XSS will be triggered.
