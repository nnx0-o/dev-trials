# TODO: Complete Language Runtime

Write a Python script implementing a complete managed language runtime.

## Requirements
- Combine: bytecode VM from task [84], garbage collector (mark-and-sweep + generational), JIT compiler from task [126], thread scheduler, and exception handling
- **Garbage Collector**: generational (young/old generation), incremental marking, write barrier, finalization queue
- **Thread model**: green threads (M:N threading); preemptive time-slicing of green threads within OS threads; `Thread` and `Mutex` objects visible to the language
- **Exception handling**: stack unwinding using the call stack in the VM; `try/catch/finally` compiled to exception tables
- **Reflection**: at runtime, inspect objects' types, methods, and fields; call methods by name
- **FFI** (Foreign Function Interface): call C functions via `ctypes` from within the language
- Benchmark: compare interpreted, JIT-compiled, and GC overhead across a suite of 10 programs
