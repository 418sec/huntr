# Description

`microweber/microweber` is vulnerable to `Arbitrary File Upload`.
Effective controls have not been implemented to restrict users from uploading malicious content to the web server. Files containing code like .php, .exe and etc can be uploaded successfully.


# Steps To Reproduce-:  

1. Login into your Microweber account
2. Go to admin page
3. Go to Users -> My Profile -> Edit User
4. Try to Upload any image extension. It will successfully update.
5. Now, download any web shell from google and modify the extension. 
6. capture the request of upload profile in burp and modify image extension (Eg- test.php.png)
7. It will succesfully upload the web shell.
