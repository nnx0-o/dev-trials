# TODO: Full Compiler with Optimizations

Write a Python script implementing a production-quality compiler for a C-like language.

## Requirements
- Integrate: front-end from task [70], type inference from task [80], IR from task [140], optimizations from tasks [105] and [140], code generation from task [98]
- Add to the IR: function inlining (inline small functions at call sites), alias analysis (determine when two pointers may alias), points-to analysis (Andersen's algorithm)
- Add to optimizations: scalar replacement of aggregates (struct fields → scalar variables), vectorization hints (mark loops safe for SIMD), link-time optimization (whole-program constant propagation)
- Implement a regression test suite of 50 programs; all must compile and run correctly
- Implement a benchmarking harness: compile each test with 0, 1, 2, 3 optimization levels; measure speedup
- Implement a debug information generator: DWARF-like mappings from machine code back to source lines
