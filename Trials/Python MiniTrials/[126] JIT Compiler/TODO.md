# TODO: JIT Compiler

Write a Python script implementing a basic JIT (Just-In-Time) compiler for the bytecode VM from task [84].

## Requirements
- Implement a profiling interpreter: count executions of each basic block (sequence of instructions with no jumps)
- When a basic block's execution count exceeds a threshold (default 10), JIT-compile it
- JIT compilation target: generate x86-64 machine code bytes for the hot basic block
- Implement code generation for: integer arithmetic, comparisons, local variable load/store
- Use `ctypes` to allocate executable memory, copy machine code into it, and call it as a function pointer
- Verify correctness: JIT-compiled code must produce identical results to interpreted code
- Benchmark: compare interpreted vs JIT-compiled execution of a loop-heavy program
- Implement inline caching for variable lookups
