# Overview

`org.webjars.npm:express-jwt` is a JWT authentication middleware.

This package is vulnerable to Authorization Bypass. The algorithms entry to be specified in the configuration is not enforced. When algorithms are not specified in the configuration, this along with the combination of `jwks-rsa`, can lead to an authorization bypass.
