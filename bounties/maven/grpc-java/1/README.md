# Overview

`io.grpc:grpc-core` is a The Java gRPC implementation. HTTP/2 based RPC, this package is vulnerable to Information Exposure.

There is a leak when a listener throws an exception and the executor is shut down immediately after the call completes.
