# Description

`ForkCMS` is an easy to use open source CMS using Symfony Components this package is vulnerable to `Stored Cross-Site Scripting (XSS)`.

https://github.com/forkcms/forkcms

# Steps To Reproduce-:  

1) install https://github.com/forkcms/forkcms locally or https://demo.fork-cms.com/private/ use demo
2) login as admin
3) in settings the `Translaction` function can be misuused to run javascript payloads by importing crafted xml file
  
# POC
  [gdrive](https://drive.google.com/drive/folders/1NPGxUuW7MytSY8D0GBFjwq5BIlGVXH_M?usp=sharing)
