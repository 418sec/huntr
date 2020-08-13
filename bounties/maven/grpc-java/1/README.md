# Overview

`io.grpc:grpc-core` is a The Java gRPC implementation. HTTP/2 based RPC.

This package is vulnerable to Information Exposure, there is a leak when a listener throws an exception and the executor is shut down immediately after the call completes execution.
