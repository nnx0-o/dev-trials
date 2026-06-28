# TODO: Compiler Optimization Framework

Write a Python script implementing a data-flow analysis framework for compiler optimizations.

## Requirements
- Represent a function as a Control Flow Graph (CFG) of basic blocks in SSA (Static Single Assignment) form
- Implement SSA construction: rename variables so each is assigned exactly once, insert φ-functions at join points (compute dominance frontier)
- Implement the following data-flow analyses using a generic worklist algorithm:
  1. **Reaching Definitions** (forward, union)
  2. **Live Variable Analysis** (backward, union)
  3. **Available Expressions** (forward, intersection)
  4. **Very Busy Expressions** (backward, intersection)
- Use each analysis to drive an optimization:
  1. Dead Code Elimination (from liveness)
  2. Global CSE (from available expressions)
  3. Code Hoisting (from very busy expressions)
- Print the CFG, SSA form, analysis results, and optimized code
