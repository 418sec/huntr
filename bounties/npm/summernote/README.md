# :book: Description


 `summernote` Summernote is a JavaScript library that helps you create WYSIWYG editors online.This package is vulnerable for `(XSS)`.

https://www.npmjs.com/package/summernote
https://github.com/summernote/summernote
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/summernote/summernote Or use demo https://summernote.org/
  1) while inserting link use js code. Payload used : `"><img src=x onerror=alert(222)>`

# :telescope: POC
https://drive.google.com/file/d/1u3fAdExEnCsxGn0k8KOAgfh_umOkVJDk/view?usp=sharing
## 💥 Impact
XSS
