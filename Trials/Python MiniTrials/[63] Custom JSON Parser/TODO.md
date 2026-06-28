# TODO: Custom JSON Parser

Write a Python script implementing a JSON parser from scratch (no `json` module).

## Requirements
- Implement a `JSONLexer` that tokenizes a JSON string into tokens: `STRING`, `NUMBER`, `TRUE`, `FALSE`, `NULL`, `LBRACE`, `RBRACE`, `LBRACKET`, `RBRACKET`, `COLON`, `COMMA`
- Implement a recursive-descent `JSONParser` that produces Python objects (`dict`, `list`, `str`, `int`, `float`, `bool`, `None`)
- Handle all JSON edge cases: escaped characters in strings, Unicode escapes (`\uXXXX`), negative and floating-point numbers, nested structures
- Also implement a `JSONSerializer` that converts Python objects back to a JSON string, with optional pretty-printing (indentation)
- Validate against the standard `json` module output on a test suite of at least 20 inputs
