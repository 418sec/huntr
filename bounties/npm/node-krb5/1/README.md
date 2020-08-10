# Overview

`node-krb5` is a Node.js native add-on for simple krb5 user authentication.

The current implementation does not verify the Kerberos Key Distribution Center (KDC), it accepts credentials from the user, then asks the KDC whether that password is correct for the corresponding Kerberos principal, without assurance that the response came from an authentic KDC.
