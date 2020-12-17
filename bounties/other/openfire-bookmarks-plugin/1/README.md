# Description

`openfire-bookmarks-plugin` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Download openfire and install https://www.igniterealtime.org/downloads/
2. Run the server http://localhost:9090/index.jsp
3. Click on "Plugins" http://localhost:9090/plugin-admin.jsp and install the "Bookmarks" plugin.
4. Click on "Server" and navigate to "Bookmarks" http://localhost:9090/plugins/bookmarks/groupchat-bookmarks.jsp
5. Click on "Add Group Chat Bookmark" http://localhost:9090/plugins/bookmarks/create-bookmark.jsp?type=group_chat
5. Insert payload in Group Chat Name/Users fiels  "><ScRiPt>alert('XSS')</ScRiPt> and create
6. XSS will be triggered.
