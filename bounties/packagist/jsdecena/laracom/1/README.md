# Description

`Laracom`Laravel FREE E-Commerce Software this package is vulnerable to `Stored Cross-Site Scripting (XSS)`.

https://github.com/jsdecena/laracom

# Steps To Reproduce-:  

1) install https://github.com/jsdecena/laracom locally or https://shop.laracom.net/ use demo
2) in search bar enter javascript payload https://shop.laracom.net/search?q=df%22%3E%3Cscript%3Ealert(document.cookie)%3C/script%3E
# POC
  [gdrive](https://drive.google.com/drive/folders/1JG2RjM9NyW7xja5hLkQK8_JnH9Pdtqpq?usp=sharing)
