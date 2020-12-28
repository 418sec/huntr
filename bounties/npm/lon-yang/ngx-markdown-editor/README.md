# :book: Description


 `ngx-markdown-editor` is aAngular markdown editor based on ace editor. This package is vulnerable for `(XSS)`.

https://github.com/lon-yang/ngx-markdown-editor
https://www.npmjs.com/package/ngx-markdown-editor
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/lon-yang/ngx-markdown-editor Or use demo https://lon-yang.github.io/markdown-editor/
  1) add jscode in editor. Payload used : `"><img src=x onerror=alert(222)>`

# :telescope: POC 
https://drive.google.com/file/d/1ATBGrjVHUqrG19Fv1SeMixVrxOh4ZIDy/view?usp=sharing
## 💥 Impact
XSS
