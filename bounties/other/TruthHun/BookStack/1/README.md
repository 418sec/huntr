# :book: Description


 `Bookstack` This package is vulnerable for `(XSS)`.

https://github.com/TruthHun/BookStack

# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/TruthHun/BookStack Or use demo https://www.bookstack.cn/
  1) add jscode in searchform. Payload used : `"><img src=x onerror=alert(137)>`

# :telescope: POC

https://drive.google.com/file/d/185lHn19wFCoRRYVd0CVslvyNHKjWEpfF/view?usp=sharing
## 💥 Impact
XSS
