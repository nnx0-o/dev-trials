# TODO: Type Inference Engine

Write a Python script implementing Hindley-Milner type inference for a simple functional language.

## Requirements
- Define a small lambda calculus: variables, lambda abstraction, application, let-bindings, integer/boolean literals, and arithmetic/comparison operators
- Implement the `Algorithm W` (unification-based type inference):
  - Type variables, type constructors (`Int`, `Bool`, `Fun(a, b)`)
  - `unify(t1, t2)` function that finds the most general unifier
  - `infer(env, expr)` function that returns the principal type
- Handle the occurs check to prevent infinite types
- Report type errors with clear messages
- Print the inferred type for each expression in a test suite of 15 examples
- Support let-polymorphism (generalization over free type variables)
