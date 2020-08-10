# Overview

`insight-api` is a Bitcoin blockchain REST and web socket API service for Bitcore Node.

This package is vulnerable to Improper Input Validation in the transaction broadcast endpoint that can result in Full Path Disclosure. This attack appears to be exploitable via. web request.
