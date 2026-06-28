# TODO: Interpreter for a Tiny Language

Write a Python script that implements a lexer, parser, and tree-walking interpreter for a simple expression language.

## Requirements
- The language supports: integer and float literals, arithmetic (`+`, `-`, `*`, `/`, `**`, `%`), parentheses, variable assignment (`x = 5`), `print` statement, `if/else` (single-line), and `while` loops
- Implement a `Lexer` class that tokenizes source code
- Implement a recursive-descent `Parser` that produces an AST
- Implement an `Interpreter` class that walks the AST and evaluates it
- Run as a REPL (read-eval-print loop) accepting one statement at a time
- Also accept a `.tiny` script file as a command-line argument
- Print clear error messages for syntax and runtime errors with line numbers
