# Overview

[cucumber](https://rubygems.org/gems/cucumber) is behavior Driven Development with elegance and joy.

This package are vulnerable to HTML Injection, the HTML formatter appends any output to the HTML without escaping HTML tags in the messages. This means that any output from the steps gets injected into the report page. In the simple case, this won't display the message as expected. When combined with for example capybara and continuous integration environments, this opens up the possibility of a Cross Site Scripting (XSS) attack from the user input on the environment being tested.
