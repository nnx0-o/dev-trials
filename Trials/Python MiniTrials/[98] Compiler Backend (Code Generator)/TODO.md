# TODO: Compiler Backend (Code Generator)

Write a Python script implementing a compiler backend that generates x86-64 assembly.

## Requirements
- Take as input the AST from task [70]
- Implement a `CodeGenerator` that traverses the AST and emits x86-64 AT&T syntax assembly
- Support: integer arithmetic, variable allocation (stack frames), function calls (System V AMD64 ABI), if/else with conditional jumps, while loops
- Implement a simple register allocator (linear scan or graph-coloring) for up to 6 registers
- Output a `.s` assembly file that can be assembled with `gcc` or `as`
- Implement basic peephole optimizations: constant folding, dead code elimination, strength reduction
- Write a test suite of 10 programs and verify that the compiled output (when assembled and linked) produces correct results
