# :book: Description


 `Luckysheet` is an online spreadsheet like excel that is powerful, simple to configure, and completely open source. This package is vulnerable for `(XSS)`.

https://github.com/mengshukeji/Luckysheet

# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/mengshukeji/Luckysheet Or use demo https://mengshukeji.github.io/LuckysheetDemo/
  1) add jscode in spredsheet. Payload used : `"><img src=x onerror=alert(137)>`

# :telescope: POC
https://drive.google.com/file/d/1I4T3OlWKIju10S7vjFiGFjKSj8Jjlmox/view?usp=sharing
## 💥 Impact
XSS
