# TODO: Self-Hosting Compiler

Write a Python script implementing a compiler for a language that can eventually compile itself.

## Requirements
- Design a small language (call it `Mini`) that is a safe subset of Python: integers, strings, lists, dicts, functions, `if/elif/else`, `while`, `for x in`, `return`, `class` (no inheritance), `import` from stdlib
- Implement a `Mini` interpreter in Python (the bootstrap compiler)
- Implement a `Mini` compiler (also in Python) that emits Python bytecode (.pyc) or transpiles to Python source
- Implement the Mini lexer and parser in Mini itself (a ~200-line Mini program)
- Show that running the Mini lexer/parser through the Python-hosted interpreter correctly parses Mini source
- Document the bootstrap sequence: Python → MiniInterpreter → MiniCompiler → self-hosted Mini parser
