# TODO: Language Server Protocol (LSP) Implementation

Write a Python script implementing a minimal Language Server Protocol server for the tiny language from task [56].

## Requirements
- Implement JSON-RPC 2.0 over stdin/stdout (the LSP transport)
- Handle LSP lifecycle: `initialize`, `initialized`, `shutdown`, `exit`
- Implement `textDocument/didOpen`, `textDocument/didChange` (full sync), `textDocument/didClose`
- Implement `textDocument/publishDiagnostics`: run the semantic analyzer and send errors/warnings
- Implement `textDocument/hover`: return the type of the identifier under the cursor
- Implement `textDocument/completion`: return identifiers in scope and built-in function names
- Implement `textDocument/definition`: return the location where the symbol was defined
- Test with a compatible editor (VS Code using a custom extension, or any LSP client)
