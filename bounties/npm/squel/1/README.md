# Overview

`squel` is a SQL query string builder, this package is vulnerable to SQL Injection.

The package does not properly escape user provided input when provided using the `setFields` method. This could lead to SQL injection (SQLi) if the query was then executed.

# Proof of Concept

```
> console.log(squel.insert().into('buh').setFields({foo: "bar'baz"}).toString());
INSERT INTO buh (foo) VALUES ('bar\'baz')
```
