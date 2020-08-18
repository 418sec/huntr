# Description
Bludit is a web application to build your own website or blog in seconds.The latest version is affected with a stored XSS.This XSS can be used to run malicious scripts on the 
browser of a second admin as more than one admin can be added to the CMS

# POC
1:Download Bludit from [Here](https://github.com/bludit/bludit)  
2:Extract the zipfile to an Apache Server  
3:Enter the required Details and Login as Admin  
4:In the Admin Dashboard add a new Catogery with an XSS payload  
5:After adding the Catogery,Click on the Name of the Catogery.An XSS popup will be Fired  
