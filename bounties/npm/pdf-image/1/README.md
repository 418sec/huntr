# Overview

pdf-image is a library that provides an interface to convert PDF's pages to png files in Node.js by using ImageMagick. Affected versions of this package are vulnerable to Remote Code Execution (RCE) due to the `child_process.exec` call lacking escaping on user input.
