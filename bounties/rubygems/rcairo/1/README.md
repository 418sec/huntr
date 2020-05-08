# Overview
[rcairo](https://rubygems.org/gems/cairo) is a Ruby bindings for cairo.

Affected versions of this package are vulnerable to NULL Pointer Dereference. `HarBuzz` is an OpenType text shaping engine, it contains a tool named `hb-view` which utilizes Cairo to give a graphical view of text using a font provided by the user. This vulnerability is due to logical problems in the program, and can cause a Denial of Service attack with a crafted font file.