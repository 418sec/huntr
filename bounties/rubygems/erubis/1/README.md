# Overview

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). Single quotes were not properly escaped in the helper.rb and helpers/rails_helper.rb files. The Erubis Documentation shows missing escaping.
