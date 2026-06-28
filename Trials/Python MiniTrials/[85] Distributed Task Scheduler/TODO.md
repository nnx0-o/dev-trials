# TODO: Distributed Task Scheduler

Write a Python script simulating a distributed task scheduler with worker nodes.

## Requirements
- Implement a `Scheduler` that manages a pool of in-process worker threads
- Support task types: `OneShot`, `Recurring(interval_seconds)`, `Cron(cron_expression)`
- Parse basic cron expressions: `* * * * *` (minute hour day month weekday)
- Task dependencies: a task can declare it must run after another task completes
- Workers pick tasks from a priority queue; report task start, completion, and failure events
- Implement task timeout: if a task runs longer than its timeout, kill it and mark TIMED_OUT
- Retry failed tasks with configurable max retries and backoff
- Print a live task dashboard (using `curses` or ANSI codes) refreshed every second
