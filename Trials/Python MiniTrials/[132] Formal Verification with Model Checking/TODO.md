# TODO: Formal Verification with Model Checking

Write a Python script implementing a CTL (Computation Tree Logic) model checker.

## Requirements
- Represent a Kripke structure: states, initial states, transition relation, atomic propositions per state
- Parse CTL formulas from strings: `EX`, `AX` (next), `EF`, `AF` (eventually), `EG`, `AG` (always), `E[φUψ]`, `A[φUψ]` (until), plus propositional connectives
- Implement the labeling algorithm: for each CTL operator, compute the set of states satisfying the formula
- Verify whether the formula holds in all initial states
- Generate a counterexample path when a formula fails (for existential operators)
- Demonstrate with: mutual exclusion protocol (verify no two processes are in CS simultaneously), a traffic light controller, and a dining philosophers model
- Report: formula, result (holds/fails), counterexample or witness path, states explored
