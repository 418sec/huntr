# Overview

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) in /src/lib/defaultCommands.js, when using editor.wysiwygEditorInsertHtml to insert image, URL or email, the inputs are not sanitized, enabling XSS.
