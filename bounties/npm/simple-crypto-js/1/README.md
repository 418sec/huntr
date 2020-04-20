[simple-crypto-js](https://github.com/danang-id/simple-crypto-js) is a JavaScript library that simplify the process of encryption and decryption of JavaScript objects.

Affected versions of this package are vulnerable to Insecure Cryptography Algorithm. Uses  `AES-CBC`  with  `PKCS#7`  padding, which is vulnerable to padding oracle attacks. This may allow attackers to break the encryption and access sensitive data.

## References

- [GitHub Issue](https://github.com/danang-id/simple-crypto-js/issues/12)
- [Padding Oracle Attack](https://robertheaton.com/2013/07/29/padding-oracle-attack/)