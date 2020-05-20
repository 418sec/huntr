# Overview
[summernote](https://www.npmjs.com/package/summernote) is a super simple WYSIWYG Editor.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS). It is possible to inject JavaScript with object decoding such as `<script>alert(1)</script>` resulting in XSS.
