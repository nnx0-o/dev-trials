# TODO: Constraint Satisfaction Problem Solver

Write a Python script implementing a general CSP solver.

## Requirements
- `CSP` class: `add_variable(name, domain)`, `add_constraint(variables, constraint_fn)`, `solve()`
- Implement backtracking search with:
  - **MRV heuristic** (Minimum Remaining Values): choose the variable with the fewest legal values
  - **Degree heuristic** as a tiebreaker
  - **LCV heuristic** (Least Constraining Value): order values by how many choices they leave for neighbors
  - **AC-3** (Arc Consistency) for constraint propagation before and during search
  - **Forward checking**: after each assignment, remove inconsistent values from unassigned variables
- Solve and demonstrate: N-Queens (N=8 and N=15), Sudoku, map coloring (Australia map), and a Zebra puzzle
- Report solutions found, backtracks taken, and time elapsed
