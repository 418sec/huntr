# Overview

Affected versions of this package are vulnerable to Insecure Encryption. In cases where an initialisation vector is not supplied to the encrypt or decrypt call in parsel.rb, the initialisation vector used by the library is set to the hardcoded value in L10 of config.rb. This makes the cipher vulnerable to chosen plaintext attacks and data leakage within the first block.
