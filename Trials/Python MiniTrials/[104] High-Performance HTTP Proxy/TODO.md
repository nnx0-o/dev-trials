# TODO: High-Performance HTTP Proxy

Write a Python script implementing an HTTP proxy server.

## Requirements
- Handle `CONNECT` tunneling for HTTPS and plain HTTP proxying
- Use `asyncio` with `StreamReader`/`StreamWriter` for non-blocking I/O
- Implement a connection pool: reuse TCP connections to the same upstream host
- Implement an LRU response cache for GET requests with `Cache-Control` awareness
- Forward all request headers; add `Via: 1.1 TinyProxy` and `X-Forwarded-For` headers
- Block list: load a list of hostnames from `blocklist.txt` and return 403 for matching requests
- Access log: log every request to `proxy_access.log` with timestamp, client IP, method, URL, status, bytes
- Graceful shutdown: drain in-flight requests on SIGINT before closing
