# Overview
[radiant](https://rubygems.org/gems/radiant) is a simple and powerful publishing system designed for small teams.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) due to a lack of sanitization. It affects Personal Preferences (Name and Username), Configuration (Site Title, Dev Site Domain, Page Parts, and Page Fields), and the `admin/pages/*/edit` resource via crafted Markdown input in the `part_body_` content parameter.