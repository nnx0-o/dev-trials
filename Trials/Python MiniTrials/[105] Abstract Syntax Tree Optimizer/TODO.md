# TODO: Abstract Syntax Tree Optimizer

Write a Python script implementing AST-level optimizations for the tiny language from task [56].

## Requirements
- Implement the following optimization passes as separate AST visitor classes:
  1. **Constant Folding**: evaluate constant sub-expressions at compile time (e.g., `2 + 3` → `5`)
  2. **Constant Propagation**: track variables assigned a constant value and replace reads with the constant
  3. **Dead Code Elimination**: remove unreachable code after `return` or branches with constant conditions
  4. **Common Subexpression Elimination (CSE)**: detect repeated identical sub-expressions and compute them once
  5. **Loop Invariant Code Motion**: move expressions that don't change inside a loop to before the loop
- Print the AST before and after each pass
- Run the test suite from task [56] and report any programs whose output changed (a bug in the optimizer)
