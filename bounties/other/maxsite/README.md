# Description

MaxSite CMS is a  CMS written in PHP.The Latest release of the version is affected with a Cross Site Scripting due to unsanitized user Input.The issue helps a malicious Admin/Sub-admin to attack other admins.

# POC

1:This is Link to Download the CMS [Here](https://github.com/maxsite/cms)  
2:Extract the zipfile to an Apache Server . Set UP the CMS    
3:Now after the proper installation of the CMS. Navigate to http://localhost/huntr/cms/admin/options .It is the page which allows admin to edit the title and layout.
4:In the add Title area enter the payload "asd"></title><script>alert(1)</script>"
4:You will end up with an XSS popup which leaves the admin panel vulnerable.  
