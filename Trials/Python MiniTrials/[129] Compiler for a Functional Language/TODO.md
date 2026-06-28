# TODO: Compiler for a Functional Language

Write a Python script implementing a compiler for a small ML-like functional language.

## Requirements
- Language features: `let`/`let rec`, lambda `fn x => e`, pattern matching (`match e with | pat => e`), tuples, algebraic data types (`type Option = Some of int | None`), integers, booleans, strings, `if/then/else`
- Implement the full pipeline: Lexer → Parser → Type Inference (Hindley-Milner from task [80]) → Desugaring → CPS transformation (Continuation-Passing Style) → Closure conversion → Lambda lifting → Code generation to Python bytecode (.pyc) or C source
- Pattern match compilation: compile patterns to decision trees
- Optimize tail calls in CPS form
- Run a standard benchmark: Ackermann(3,7), quicksort on 1000 elements, and a stream of natural numbers
- Report compile time and runtime vs the Python interpreter baseline
