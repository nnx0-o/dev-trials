# TODO: LISP Interpreter

Write a Python script implementing a full Scheme-like LISP interpreter.

## Requirements
- Implement a `Reader` that tokenizes and parses LISP s-expressions into Python lists/atoms
- Implement an `Evaluator` (eval/apply model) supporting: `define`, `lambda`, `if`, `cond`, `let`, `let*`, `letrec`, `begin`, `quote`, `quasiquote`, `unquote`, `set!`, `and`, `or`, `not`
- Implement tail-call optimization (TCO) using a trampoline
- Built-in functions: arithmetic, comparison, list ops (`car`, `cdr`, `cons`, `list`, `append`, `map`, `filter`, `reduce`), I/O (`display`, `newline`, `read`), type predicates
- Implement proper lexical scoping with closures
- REPL with multi-line input detection
- Load and run `.scm` files as command-line argument
- Demonstrate with a recursive Fibonacci and a Y-combinator
