
Affected versions of this package are vulnerable to XML External Entity (XXE) Injection via `validation/RestXmlSchemaValidator.java`.

XXE Injection is a type of attack against an application that parses XML input. XML is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. By default, many XML processors allow specification of an external entity, a URI that is dereferenced and evaluated during XML processing. When an XML document is being parsed, the parser can make a request and include the content at the specified URI inside of the XML document.

Attacks can include disclosing local files, which may contain sensitive data such as passwords or private user data, using file: schemes or relative paths in the system identifier.

For example, below is a sample XML document, containing an XML element- username.

```js
<?xml version="1.0" encoding="ISO-8859-1"?> 
  <username>John</username> 
</xml>
```
An external XML entity - `xxe`, is defined using a system identifier and present within a DOCTYPE header. These entities can access local or remote content. For example the below code contains an external XML entity that would fetch the content of `/etc/passwd` and display it to the user rendered by `username`.
```js
<?xml version="1.0" encoding="ISO-8859-1"?>  
<!DOCTYPE foo [ 
  <!ENTITY xxe SYSTEM "file:///etc/passwd" >]>  
  <username>&xxe;</username> 
</xml>
```
Other XXE Injection attacks can access local resources that may not stop returning data, possibly impacting application availability and leading to Denial of Service.

## References

-  [GitHub Issue](https://github.com/mulesoft/apikit/issues/547)