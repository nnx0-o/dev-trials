# TODO: Proof Checker

Write a Python script implementing a formal proof checker for propositional logic.

## Requirements
- Support propositional logic with: variables, `NOT`, `AND`, `OR`, `IMPLIES`, `IFF`
- Parse logical formulas from strings
- Implement a truth-table generator and tautology checker
- Implement the following inference rules: Modus Ponens, Modus Tollens, Hypothetical Syllogism, Disjunctive Syllogism, Conjunction Introduction/Elimination, Double Negation, De Morgan's Laws
- Accept a proof in a structured text format: numbered lines, each line is either an assumption or derived from previous lines via a named rule
- Verify each step and report the first error found
- Also implement a simple resolution-based theorem prover for satisfiability
- Demonstrate with 5 classic logical arguments
