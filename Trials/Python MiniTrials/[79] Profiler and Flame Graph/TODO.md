# TODO: Profiler and Flame Graph

Write a Python script implementing a sampling profiler that generates an ASCII flame graph.

## Requirements
- Implement a `Profiler` class that uses `sys.setprofile()` to hook into function calls and returns
- Track: call count, total time, and self time (excluding child calls) per function
- Support context manager usage: `with Profiler() as p: ...`
- After profiling, generate a flame graph in ASCII: each function is a row of `#` characters proportional to its inclusive time; stack depth increases downward
- Print a sorted table: function name, call count, total time (ms), self time (ms), % of total
- Also implement a `@profile` decorator for profiling individual functions
- Demonstrate by profiling a sorting algorithm and a recursive Fibonacci function
