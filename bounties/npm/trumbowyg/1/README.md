# :book: Description
 `Trumbowyg` is a simple and lightweight WYSIWYG editor, weight only 20kB minifed (8kB gzip) for faster page loading. This package is vulnerable for `(XSS)`.

https://github.com/Alex-D/Trumbowyg
https://www.npmjs.com/package/trumbowyg
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/Alex-D/Trumbowyg Or use demo https://alex-d.github.io/Trumbowyg/
  1) add jscode in editor. Payload used : `"><img src=x onerror=alert(137)>`

# :telescope: POC

https://drive.google.com/file/d/1Rqsbr9_ijoHOa949B9Q1cM2jv8jb4zwV/view?usp=sharing
## 💥 Impact
XSS
