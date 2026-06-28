# TODO: REST API Client Framework

Write a Python module implementing a reusable REST API client with caching and retry logic.

## Requirements
- Implement a `RestClient` class initialized with a base URL and optional auth token
- Methods: `get(path, params)`, `post(path, body)`, `put(path, body)`, `delete(path)` — all returning parsed JSON
- Add an LRU cache (manual implementation, no `functools`) for GET responses with configurable TTL in seconds
- Implement exponential backoff retry logic (max 3 retries) for 5xx errors and connection errors
- Support request/response middleware hooks
- Log all requests and responses (method, URL, status, elapsed time) to a rotating log file
- Demonstrate with the JSONPlaceholder API (`https://jsonplaceholder.typicode.com`)
