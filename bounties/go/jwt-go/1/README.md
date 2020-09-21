# Overview

This package is vulnerable to Access Restriction Bypass if `m["aud"]` happens to be `[]string{}`, as allowed by the spec, the type assertion fails and the value of aud is `""`. This can cause audience verification to succeed even if the audiences being passed are incorrect if required is set to false.
