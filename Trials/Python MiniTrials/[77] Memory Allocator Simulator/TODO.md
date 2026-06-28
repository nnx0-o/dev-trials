# TODO: Memory Allocator Simulator

Write a Python script simulating dynamic memory allocation strategies.

## Requirements
- Simulate a flat memory pool of N bytes (configurable, default 1024)
- Implement three allocation strategies: First Fit, Best Fit, Worst Fit
- Operations: `malloc(size)` → returns start address or -1, `free(address)`, `realloc(address, new_size)`
- Maintain a free list and a used block list
- After each operation, print a visual memory map (e.g., `[FREE 128][USED 64][FREE 832]`)
- Track: fragmentation percentage, allocation success rate, peak usage
- Simulate a workload of 50 random alloc/free operations and compare strategies in a summary table
