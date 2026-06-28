# TODO: Automated Theorem Prover

Write a Python script implementing an automated theorem prover for first-order logic.

## Requirements
- Support FOL syntax: variables, constants, function terms `f(x, y)`, predicates `P(x)`, `forall x.`, `exists x.`, `not`, `and`, `or`, `implies`, `iff`
- Parse FOL formulas from strings
- Implement Skolemization: convert to prenex normal form, then Skolem normal form, then CNF
- Implement the Robinson resolution algorithm: unification with occurs check, resolution rule, factoring
- Implement subsumption deletion and tautology deletion to prune the clause set
- Prove satisfiability/unsatisfiability using refutation (negate the goal, prove unsatisfiable)
- Set a step limit (default 10000 resolution steps) and report timeout
- Demonstrate by proving 10 standard first-order logic theorems
