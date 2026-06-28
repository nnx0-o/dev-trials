# TODO: Concurrent Skip List

Write a Python script implementing a lock-free concurrent skip list.

## Requirements
- Implement a skip list with configurable max level (default 32) and probability p=0.5
- Each node has an array of `next` pointers; use `threading.local` counters for level selection
- Implement lock-free `search`, `insert`, and `delete` using optimistic concurrency: nodes are logically deleted by marking a pointer bit before physical removal
- Implement `find_with_predecessors` that returns predecessor and successor arrays for all levels
- Verify linearizability: run 8 threads doing random inserts/deletes/reads concurrently; validate the final state is a consistent sorted set
- Benchmark against a `threading.Lock`-protected sorted list and Python's `dict`
- Report: throughput (ops/sec) at 1, 2, 4, 8 threads for each implementation
