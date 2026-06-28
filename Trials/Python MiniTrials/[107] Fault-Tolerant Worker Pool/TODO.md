# TODO: Fault-Tolerant Worker Pool

Write a Python module implementing a robust, fault-tolerant worker pool.

## Requirements
- `WorkerPool(n_workers, task_timeout, max_retries)` class
- Workers are OS processes (use `multiprocessing`) for true parallelism and isolation from crashes
- If a worker process dies (segfault or exception), spawn a replacement automatically
- Implement a heartbeat: each worker sends a heartbeat every 500ms; if a heartbeat is missed for 2 seconds, the worker is considered dead
- Task queue uses `multiprocessing.Queue`; completed results go to a results queue
- Implement `map(func, items)` and `submit(func, *args)` interfaces
- Progress bar showing completed/total/failed tasks
- Graceful shutdown on SIGINT: finish in-progress tasks, discard queued ones
