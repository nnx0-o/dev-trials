# TODO: Verified Operating System Kernel

Write a Python script implementing an OS kernel with formal invariant verification.

## Requirements
- Implement a simplified microkernel (IPC, scheduling, memory) with all state transitions as pure functions returning new state
- Specify and verify the following invariants using symbolic model checking (encode state as Python objects, exhaustively explore all reachable states up to a bounded depth):
  1. **Memory safety**: no two processes share a physical page without explicit sharing
  2. **Capability safety**: a process can only send capabilities it possesses
  3. **Scheduling liveness**: every READY process eventually runs (no starvation), under fair scheduling
  4. **IPC deadlock freedom**: bounded IPC with timeouts; no cyclic wait under the IPC protocol
- The verifier explores all interleavings of N processes (N ≤ 4) up to K steps (K ≤ 20)
- Report: invariant name, result (holds/violated), counterexample trace if violated
