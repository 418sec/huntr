# Description
TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML-powered applications. This package is vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.
It is possible for an attacker to intercept and alter the packages which may leads to RCE / other attacks which may help the attacker gain access to host.

# List of Modules using insecure Protocol 
* [module 1](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/micro/tools/make/third_party_downloads.inc)

# Referance
* [onetwoseven](https://0xrick.github.io/hack-the-box/onetwoseven/) , its a box in HTB which demonstrates gaining access to the target with insecure file download. 