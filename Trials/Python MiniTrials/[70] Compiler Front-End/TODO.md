# TODO: Compiler Front-End

Write a Python script implementing the front-end of a compiler for a simple C-like language.

## Requirements
- Define a grammar supporting: variable declarations (`int x = 5;`), assignments, arithmetic, comparisons, logical operators, `if/else`, `while`, `for`, function definitions with parameters and return types, and function calls
- Implement a `Lexer` with token types: keywords, identifiers, literals (int, float, string), operators, punctuation
- Implement a recursive-descent `Parser` producing a typed AST
- Implement a `SemanticAnalyzer` that: checks variable declarations before use, validates function call argument counts, detects type mismatches, and reports undefined variables/functions
- Print the AST as an indented tree
- Print all semantic errors with line/column numbers
