# TODO: Abstract Interpretation Framework

Write a Python script implementing abstract interpretation for static analysis.

## Requirements
- Implement the following abstract domains as classes with lattice operations (`join`, `meet`, `widen`, `narrow`, `top`, `bottom`, ordering `leq`):
  1. **Sign domain**: {⊥, negative, zero, positive, ⊤}
  2. **Interval domain**: [lo, hi] with infinite bounds
  3. **Parity domain**: {⊥, even, odd, ⊤}
  4. **Constant domain**: {⊥, c, ⊤}
- Implement **product domains** (combine two domains pair-wise)
- Implement the analyzer for the tiny language from task [56]: run forward analysis, iterating until fixpoint using widening to ensure termination
- Verify that the analysis is sound: for each analyzed program, run it concretely 100 times with random inputs and verify no concrete value escapes the abstract bounds
- Demonstrate: detect division by zero, detect array out-of-bounds, detect unreachable code
