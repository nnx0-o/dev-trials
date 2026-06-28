# TODO: Automated Program Repair

Write a Python script implementing an automated program repair system.

## Requirements
- Input: a Python function with a bug and a test suite (list of `(input, expected_output)` pairs)
- Implement **GenProg-style repair**: generate patches by mutating the AST; validate each patch against the test suite
- Mutation operators: statement deletion, statement duplication, statement swap, operator replacement (`+` ↔ `-`, `<` ↔ `<=`, `==` ↔ `!=`), variable replacement (any in-scope variable)
- Use **genetic programming**: population of 50 patches, 10 generations; fitness = number of tests passed; crossover by combining AST sub-trees; mutation as above
- Also implement **template-based repair**: for common bug patterns (off-by-one, wrong operator, missing null check), apply targeted fixes
- Report: correct patches found, search space explored, time to first valid patch
- Demonstrate on 5 intentionally buggy functions
