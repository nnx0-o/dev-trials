# TODO: Static Analyzer

Write a Python script implementing a static code analyzer for Python source files.

## Requirements
- Use `ast.parse()` to analyze Python source files given as command-line arguments
- Implement the following checks:
  1. Unused variables (assigned but never read)
  2. Undefined variables (read before assignment or not in scope)
  3. Unreachable code (after `return`/`raise` in a function)
  4. Mutable default arguments (e.g., `def f(x=[]):`)
  5. Shadowed built-ins (variable named `list`, `dict`, etc.)
  6. Missing return in non-void function (function has paths that don't return a value)
  7. Too-complex functions (cyclomatic complexity > 10)
- Report each issue as `<file>:<line>:<col>: <code> <message>`
- Support a `--ignore <code>` flag to suppress specific checks
