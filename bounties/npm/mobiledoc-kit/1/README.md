# :book: Description

`Mobiledoc Kit` is a framework-agnostic library for building WYSIWYG editors supporting rich content via cards. This package is vulnerable for `(XSS)`.

https://github.com/bustle/mobiledoc-kit

https://www.npmjs.com/package/mobiledoc-kit
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/bustle/mobiledoc-kit Or use demo https://bustle.github.io/mobiledoc-kit/demo/
  1) add jscode in editor. Payload used : `"><img src=x onerror=alert(137)>`

# :telescope: POC

https://drive.google.com/file/d/1ku0RkcclMPjGqDf2t62wT9FnP5Qztu7T/view?usp=sharing
## 💥 Impact
XSS
