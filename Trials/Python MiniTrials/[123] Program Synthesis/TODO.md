# TODO: Program Synthesis

Write a Python script implementing a simple program synthesis system.

## Requirements
- Implement synthesis by enumeration: enumerate programs in a DSL up to a given size and test each against examples
- DSL: integer operations (`+`, `-`, `*`, `//`, `%`), list operations (`head`, `tail`, `cons`, `len`, `nth`, `map`, `filter`, `fold`), conditionals, constants (0, 1, 2, empty list)
- Represent programs as AST tuples; enumerate in order of increasing AST size
- Prune the search space: type-directed enumeration (only grow the search in directions consistent with the output type)
- Specification: input-output examples `[(input1, output1), ...]`
- Synthesize programs that satisfy all examples
- Demonstrate: synthesize `max(a, b)`, `reverse(list)`, `sum(list)`, `nth element`, and `filter evens`
- Print the synthesized program as readable code and the number of programs evaluated
