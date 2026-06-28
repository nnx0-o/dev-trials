# TODO: HTTP Server from Scratch

Write a Python script implementing a minimal HTTP/1.1 server using raw sockets.

## Requirements
- Use `socket` module only; no `http.server` or framework
- Parse incoming HTTP requests: method, path, headers, and body
- Serve static files from a `public/` directory with correct MIME types for `.html`, `.css`, `.js`, `.json`, `.png`, `.jpg`
- Support `GET` and `HEAD` methods
- Return correct status codes: 200 OK, 404 Not Found, 405 Method Not Allowed, 500 Internal Server Error
- Add response headers: `Content-Type`, `Content-Length`, `Date`, `Server: TinyPy/1.0`
- Handle multiple concurrent clients using `threading`
- Log requests: `<IP> - <method> <path> <status> <size>B`
