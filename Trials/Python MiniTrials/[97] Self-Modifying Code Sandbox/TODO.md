# TODO: Self-Modifying Code Sandbox

Write a Python script implementing a sandboxed environment for safe execution of dynamically generated code.

## Requirements
- Implement a `Sandbox` class that executes arbitrary Python code strings safely
- Use `RestrictedPython` principles (implemented from scratch): parse the AST with `ast.parse`, walk the tree, and reject disallowed nodes: `Import`, `ImportFrom`, attribute access on dangerous names (`__class__`, `__builtins__`, `__import__`, `os`, `sys`, `open`, `eval`, `exec`, `compile`, `globals`, `locals`)
- Provide a safe built-in namespace: math functions, `print`, `len`, `range`, `str`, `int`, `float`, `list`, `dict`, `set`
- Implement CPU time limit (2 seconds) using `signal.alarm` or a thread-based timer
- Implement memory limit by tracking object allocations
- Return: stdout output, return value, execution time, error message if any
- Build a REPL that runs user-typed code in the sandbox
