# :book: Description


 `Papermerge` is an open source document management system (DMS) primarily designed for archiving and retrieving your digital documents. Instead of having piles of paper documents all over your desk, office or drawers - you can quickly scan them and configure your scanner to directly upload to Papermerge DMS.. This package is vulnerable for `(XSS)`.

https://github.com/ciur/papermerge
https://pypi.org/project/papermerge/
# :recycle:  Steps To Reproduce-:  
  0) clone https://github.com/ciur/papermerge or use demo https://demo.papermerge.com/
  1) add jscode in meta form. Payload used : `"><img src=x onerror=alert(137)>`

# :telescope: POC

https://drive.google.com/file/d/1AovUz4yG46RRVCRlohd1-YyTlO_edEKg/view?usp=sharing
## 💥 Impact
XSS
