# TODO: Speculative Execution Simulator

Write a Python script simulating out-of-order execution with speculative branching.

## Requirements
- Simulate a superscalar CPU pipeline: Fetch, Decode, Rename (register renaming via physical register file), Dispatch, Issue (out-of-order), Execute, Writeback, Commit
- Implement a Reorder Buffer (ROB) for in-order commit
- Implement an issue queue: instructions issue when all source operands are ready (Tomasulo algorithm)
- Implement a branch predictor: 2-bit saturating counter per PC with a Branch Target Buffer
- Speculative execution: instructions after a branch are fetched and executed speculatively
- On misprediction: flush the pipeline, squash speculative instructions from ROB, restore register map
- Count: IPC (instructions per cycle), branch misprediction rate, ROB occupancy
- Simulate the demo program from task [84] and report pipeline statistics
