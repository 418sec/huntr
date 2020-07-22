# Overview

[radiant](https://rubygems.org/gems/radiant) is a simple and powerful publishing system designed for small teams.

This package is vulnerable to Cross-site Scripting (XSS) due to a lack of sanitization. It affects Personal Preferences (name and username), Configuration (site title, dev site domain, page parts, and page fields), and the `admin/pages/*/edit` resource via crafted Markdown input in the `part_body_` content param.
