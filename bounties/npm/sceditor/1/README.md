# Overview

`sceditor` is a lightweight WYSIWYG BBCode and XHTML editor, this package are vulnerable to Cross-site Scripting (XSS)
in `/src/lib/defaultCommands.js` when using `editor.wysiwygEditorInsertHtml` to insert and image, URL or email, the inputs are not sanitized allowing an XSS.
