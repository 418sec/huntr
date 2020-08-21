# Overview

`web3` is a JavaScript API which connects to the Generic JSON RPC spec.

This package are vulnerable to Insecure Credential Storage, the current implementation of `web3.js` could result in wallet decryption under certain circumstances. When a wallet is saved and encrypted into local storage, a private key is needed to load the wallet. However, this private key is available via/ LocalStorage and is readable in plaintext format on a webpage after a wallet is loaded.

This implementation could be abused by an attacker through client-side attacks such as Cross-site Scripting and could result in the stealing of a user's wallet private key.
