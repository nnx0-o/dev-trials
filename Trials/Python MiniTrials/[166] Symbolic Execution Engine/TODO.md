# TODO: Symbolic Execution Engine

Write a Python script implementing a symbolic execution engine for the tiny language from task [56].

## Requirements
- Implement symbolic values: a variable in the program can be a symbolic expression (e.g., `x + 2`, `y * z`) rather than a concrete value
- At each branch, the symbolic executor forks execution: one path assumes the condition is true, the other assumes it is false
- Track a **path condition** (conjunction of branch conditions) per execution path
- Implement a constraint solver (for linear integer arithmetic): check if a path condition is satisfiable using the Simplex method or Fourier-Motzkin elimination
- Report: all feasible execution paths, their path conditions, and a concrete input that exercises each path
- Detect: division by zero, assertion violations, and integer overflow on any reachable path
- Demonstrate on 5 example programs; compare paths found vs exhaustive testing
