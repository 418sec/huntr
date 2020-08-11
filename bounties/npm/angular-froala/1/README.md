# Overview

`angular-froala` is an Angular.js bindings for Froala WYSIWYG HTML rich text editor, this package is vulnerable to Cross-site Scripting (XSS).

The `ngModel.$isEmpty` function executes the content of a value using the JQuery function and without filtering content for unsafe HTML.
