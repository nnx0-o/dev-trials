# TODO: Metacircular Evaluator

Write a Python script implementing a metacircular evaluator for a Python-like language in itself.

## Requirements
- Implement a Python subset interpreter (using `ast.parse` to parse Python source)
- Supported nodes: `Num`, `Str`, `Name`, `BinOp`, `UnaryOp`, `BoolOp`, `Compare`, `If`, `While`, `For`, `FunctionDef`, `Return`, `Assign`, `AugAssign`, `Call`, `List`, `Dict`, `Tuple`, `Subscript`, `Attribute`, `Lambda`, `ListComp`
- Implement closures with proper lexical scoping
- Implement `class` definitions with single inheritance and `self`
- The evaluator itself must be written in the same Python subset it interprets
- Boot the evaluator by running it under CPython, then feed it its own source code (self-hosting test)
- Verify that the evaluator, running inside itself, can evaluate simple programs
- Document the two-level tower of interpreters
