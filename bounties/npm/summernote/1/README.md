# Overview
[summernote](https://www.npmjs.com/package/summernote) is a super simple WYSIWYG Editor.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS). It is possible to inject JavaScript with object decoding such as '&lt;script&gt;alert(1)&lt;/script&gt; resulting in XSS.