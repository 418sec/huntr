# Description

`@aofl/object-utils` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Use this sandbox: https://codesandbox.io/s/object-utils-prototype-pollution-qnxwg

2. Check the console:
```
Before: undefined
After: Prototype Polluted
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.
