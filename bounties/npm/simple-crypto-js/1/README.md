# Overview

simple-crypto-js is a JavaScript library that simplify the process of encryption and decryption of JavaScript objects. Affected versions of this package are vulnerable to Insecure Cryptography Algorithm. Uses `AES-CBC` with `PKCS#7` padding, which is vulnerable to padding oracle attacks. This may allow attackers to break the encryption and access sensitive data.
