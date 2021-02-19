# :book: Description


 `TinyFileManager` is web based file manager and it is a simple, fast and small file manager with a single file, multi-language ready web application for storing, uploading, editing and managing files and folders online via web browser. The Application runs on PHP 5.5+, It allows the creation of multiple users and each user can have its own directory and a build-in support for managing text files with cloud9 IDE and it supports syntax highlighting for over 150+ languages and over 35+ themes.
. This package is vulnerable for `stored (XSS)`.

https://github.com/prasathmani/tinyfilemanager
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/prasathmani/tinyfilemanager Or use demo https://tinyfilemanager.github.io/demo/
  1) upload a filename with jscode. Payload used : `"><img src=x onerror=alert(222)>.png`

# :telescope: POC
https://drive.google.com/file/d/1t2afWVrLu_mb_S69n6d4SbLHOziuEeuZ/view?usp=sharing
## 💥 Impact
XSS
