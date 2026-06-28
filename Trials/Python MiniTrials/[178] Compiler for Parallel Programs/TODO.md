# TODO: Compiler for Parallel Programs

Write a Python script implementing a compiler for a simple parallel programming language.

## Requirements
- Language features: shared-memory parallel blocks (`parallel { ... | ... }`), `spawn` and `sync`, channels (`chan c; c <- value; x := <-c`), atomic sections (`atomic { ... }`), critical sections, and data-parallel `forall i in range(N): A[i] = B[i] + C[i]`
- Implement a race condition detector: data-flow analysis to find shared variable accesses without synchronization
- Implement a deadlock detector: build a lock-acquisition graph and detect cycles
- Code generation: emit Python code using `threading` for parallel blocks, `queue.Queue` for channels, `threading.Lock` for atomics
- Implement a parallelism profiler: measure actual parallelism achieved vs theoretical; show a Gantt chart of thread execution
- Demonstrate: parallel merge sort, matrix-vector multiply, producer-consumer pipeline
