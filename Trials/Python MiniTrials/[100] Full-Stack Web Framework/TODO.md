# TODO: Full-Stack Web Framework

Write a Python script implementing a minimal but complete web framework.

## Requirements
- HTTP server layer built on raw sockets (from task [68])
- Router: `@app.route('/path', methods=['GET','POST'])` decorator, support URL parameters `/user/<id>`, regex routes
- Middleware stack: `@app.middleware` decorators applied in order; implement built-in: request logging, CORS headers, rate limiting (per-IP, configurable)
- Request object: method, path, headers, query params (parsed), body (raw and JSON)
- Response class: status, headers, body; helpers `json()`, `html()`, `redirect()`, `abort(status_code)`
- Template engine: `{{ variable }}`, `{% if %}...{% endif %}`, `{% for x in items %}...{% endfor %}`, template inheritance with `{% extends %}` and `{% block %}`
- ORM integration from task [57]
- Demo app: a blog with posts, comments, user registration, and session-based auth
