# TODO: High-Performance Matrix Multiplication

Write a Python script implementing progressively faster matrix multiplication algorithms.

## Requirements
- Implement and benchmark the following algorithms (using only Python lists, no NumPy):
  1. **Naive** O(N³): triple nested loop
  2. **Cache-oblivious** divide-and-conquer: recursively split matrices
  3. **Strassen's algorithm**: 7-multiplication O(N^2.81) recursive algorithm; implement full recursion
  4. **Tiled/blocked** multiplication: optimize for cache by processing in blocks of size B (find optimal B empirically)
  5. **Winograd's variant** of Strassen: fewer additions
- Benchmark all on N = 64, 128, 256 (pure Python is slow; use small N)
- Report: time, GFlops (theoretical), and verify all give identical results (within floating-point tolerance)
- Show the recurrence tree for Strassen's algorithm
