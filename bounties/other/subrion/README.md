# Description
`Subrion` is PHP based CMS. It is one of the best CMS I ever used.The Project is vulnerable to CSRF attack which allows a user to force admin to delete the "Currencies" added in the site.


# Steps To Reproduce & POC
1:Download and Setup `Subrion` [Subrion-Link](https://github.com/intelliants/subrion/)
2:Extract the source code to an Apache server with MYSQL
3:As Default 3 Currencies are added in the Site you can view it by navigaing to http://localhost/huntr/subrion/panel/currencies/
4:Save the below code as HTML and Click Submit . The Currencie will be deleted
```
<form method="GET" action="http://localhost/bludit-master/admin/install-theme/alternative">
<input type="submit" >
</form>
```
# Impact
This can allow a user to force admin to remove "Currencies" from the website