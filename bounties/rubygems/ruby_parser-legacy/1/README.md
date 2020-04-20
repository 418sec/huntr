[ruby_parser-legacy](https://rubygems.org/gems/ruby_parser-legacy) is the ruby 1.8 and 1.9 parsers from  ruby_parser  (which are now removed) and plugs them into the existing system.

Affected versions of this package are vulnerable to Improper Privilege Management as it allows local privilege escalation because of world-writable files. A local user can insert malicious code into the  `ruby_parser-legacy-1.0.0/lib/ruby_parser/legacy/ruby_parser.rb`  file.
## References
-   [Brakeman Releases Homepage](https://brakemanscanner.org/)
-   [GitHub Issue](https://github.com/zenspider/ruby_parser-legacy/issues/1)