# TODO: Async Task Queue

Write a Python module implementing an async task queue using `asyncio`.

## Requirements
- Implement a `TaskQueue` class with methods: `enqueue(coro, priority=0)`, `start(workers=4)`, `stop()`, `status()`
- Use a priority queue (`asyncio.PriorityQueue`) so higher-priority tasks run first
- Each worker runs as a separate `asyncio.Task`, pulling from the queue indefinitely
- Implement task retries: if a task raises an exception, retry up to `max_retries` times with exponential backoff
- Track task states: `PENDING`, `RUNNING`, `DONE`, `FAILED`
- Implement `wait_for_all()` that blocks until all enqueued tasks complete
- Build a demo that simulates async HTTP requests (with `asyncio.sleep` delays) through the queue
