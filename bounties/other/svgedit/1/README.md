# :book: Description


 `SVG-edit` is a fast, web-based, JavaScript-driven SVG drawing editor that works in any modern browser. This package is vulnerable for `(SSRF)`.

https://github.com/SVG-Edit/svgedit
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/SVG-Edit/svgedit Or use demo https://svg-edit.github.io/svgedit/dist/editor/index.html
  1) open payload svg. Payload used : 
  `rc3.svg`
  ```
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:relative" width="300" height="200" overflow="hidden"><image x="10" y="10" width="276" height="110" xlink:href="http://localhost:8080/svg"/><path d="M0 150h300v10H0z"/></svg>
  ```

# :telescope: POC
https://drive.google.com/file/d/15Z0KLaIkIMZSdyxFTikI4UzoVlExiO8R/view?usp=sharing
## 💥 Impact
SSRF
