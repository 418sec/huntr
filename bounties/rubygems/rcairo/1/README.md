[rcairo](https://rubygems.org/gems/cairo)  is a Ruby bindings for cairo.

Affected versions of this package are vulnerable to NULL Pointer Dereference.  `HarBuzz`  is an OpenType text shaping engine, it contains a tool named  `hb-view`  which utilizes Cairo to give a graphical view of text using a font provided by user. This vulnerability is due to logical problem in program, and can cause a Denial of Service attack with a crafted font file.
## References
-   [Frewdesktop Bug](https://bugs.freedesktop.org/show_bug.cgi?id=100763)
-   [GitLab Issue](https://gitlab.freedesktop.org/cairo/cairo/issues/80)