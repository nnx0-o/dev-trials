# TODO: Functional Compiler with Dependent Types

Write a Python script implementing a small dependently typed language.

## Requirements
- Implement a core language with: `Type`, `Pi` types (dependent function types `(x : A) -> B(x)`), `Lambda`, `Application`, `Sigma` types (dependent pairs), `Pair`, `Fst`, `Snd`, natural numbers (`Zero`, `Succ`, `Ind_Nat`), equality type (`Id`), and reflection (`refl`)
- Implement a **bidirectional type checker**: `check(ctx, term, type)` and `infer(ctx, term) -> type`
- Implement definitional equality via normalization: `normalize(ctx, term) -> term` (beta and eta reduction)
- Type checking must be **complete**: reject ill-typed terms, accept all well-typed ones
- Demonstrate: encode `Vec` (length-indexed vectors), prove that `reverse (reverse xs) == xs`, and encode `Fin n` (type with exactly n elements)
- Print detailed type error messages with full context
