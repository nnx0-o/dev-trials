# TODO: Heterogeneous Computing Simulator

Write a Python script simulating a heterogeneous CPU+GPU computing system.

## Requirements
- Simulate a GPU with N streaming multiprocessors (SMs), each with M CUDA cores
- Implement a thread block scheduler: dispatch blocks from a kernel launch to available SMs
- Implement warp execution (groups of 32 threads): simulate SIMT execution where divergent branches cause serialization
- Implement shared memory per SM (simulated as a dict per block) and global memory (flat array)
- Implement GPU memory transfer: `memcpy_h2d` and `memcpy_d2h` with simulated latency
- Implement a simple GPU assembly language: `ADD`, `MUL`, `LD`, `ST`, `SYNC` (barrier), `BRA` (branch)
- Compile Python lambda functions to GPU assembly
- Demo: parallel vector addition, matrix multiplication, and reduction (sum) on the GPU simulator
- Report occupancy, warp efficiency, and memory bandwidth utilization
