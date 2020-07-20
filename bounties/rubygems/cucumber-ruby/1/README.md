# Overview

[cucumber](https://rubygems.org/gems/cucumber) is behavior Driven Development with elegance and joy.

Affected versions of the package are vulnerable to HTML Injection. The HTML formatter appends any scenario output to the HTML without escaping HTML tags in the messages. This way, any output from the steps gets injected into the report page. In the simple case, this won't display the message as expected. When combined with for example capybara and CI environments this opens up the possibility of an XSS attack from the user input on the environment being tested.
