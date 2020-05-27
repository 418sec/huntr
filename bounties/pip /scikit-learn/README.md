# Overview
[scikit-learn](https://pypi.org/project/scikit-learn/) is a Python module for machine learning built on top of SciPy and is distributed under the 3-Clause BSD license.

Affected versions of this package are vulnerable to Remote Code Execution (RCE). It can unserialize and execute commands from an untrusted file that is passed to the joblib.load() function, if __reduce__ makes an os.system call.
