# TODO: Formalized Mathematics Library

Write a Python script implementing a library of formalized mathematics.

## Requirements
- Implement a **proof assistant** kernel: a type theory core (from task [172]) that is trusted, plus tactics that produce kernel proof terms
- Implement tactics: `intro`, `apply`, `exact`, `rw` (rewrite), `induction`, `cases`, `split`, `left`, `right`, `exists`, `ring` (decide ring equalities), `omega` (decide linear arithmetic)
- Formalize and prove in the system:
  1. Natural number arithmetic: commutativity of addition, associativity, distributivity
  2. Peano's axioms imply induction
  3. Cantor's theorem: no surjection from A to 2^A
  4. Infinite primes (Euclid's proof)
  5. Fundamental theorem of arithmetic (unique prime factorization)
  6. The halting problem is undecidable (diagonalization argument)
- Proof terms are fully checked by the kernel; no axiom beyond the type theory is admitted
