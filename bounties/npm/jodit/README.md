# Description


 `Jodit` An excellent WYSIWYG editor written in pure TypeScript without the use of additional libraries. Its file editor and image editor. This package is vulnerable for `(XSS)`.

https://github.com/xdan/jodit
https://www.npmjs.com/package/jodit
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/xdan/jodit Or use demo https://xdsoft.net/jodit/
  1) add jscode in editor. Payload used : `"><img src=x onerror=alert(222)>`

# POC
https://drive.google.com/file/d/1zQEckBimk9cFiubEmO2k8EUCA2LuBkG_/view?usp=sharing
## 💥 Impact
XSS
