# TODO: Verified Concurrent Data Structures

Write a Python script implementing and formally verifying concurrent data structures.

## Requirements
- Implement a **lock-free queue** (Michael-Scott queue) using simulated CAS operations
- Implement a **lock-free stack** (Treiber stack)
- Implement a **lock-free hash map** (split-ordered list)
- Implement a **linearizability checker**: given a set of concurrent operation histories (start time, end time, operation, result), check if there exists a linearization order consistent with the sequential specification
- Exhaustively test each structure with 3 threads × 1000 operations; record all histories; run the linearizability checker on each
- Implement a **model checker** for concurrent code: enumerate all thread interleavings using DFS; detect violations of invariants; report the minimal bug-inducing schedule
- Demonstrate detection of the ABA problem in a naïve lock-free stack
