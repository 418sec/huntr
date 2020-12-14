# Description

`DigiDocu` is a free, open source document management system built with laravel. Which provide easy way to manage documents with features like permissions, resize & compress images, combine multiple images into single pdf, zip all files etc...this package is vulnerable to `Stored Cross-Site Scripting (XSS)`.

https://github.com/harish81/digidocu
# :recycle:  Steps To Reproduce-:  
 1. login with user which have permissin to creat or edit file
 2. add file name with jscode 
# :male_detective: POC
  [gdrive](https://drive.google.com/file/d/1bJO5B37IZBUgTWFRV2YctNtZx9nullnn/view?usp=sharing)
## 💥 Impact
run any javascript payloads
