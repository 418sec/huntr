# Overview

Affected versions of this package are vulnerable to Improper Authentication. The module defined to handle authentication but does not validate the JWT token sent by the user. Therefore it allows modifying payload within the token. It provides an opportunity to forge the user's identity by changing the information inside the token's payload that is used to authenticate the client.
