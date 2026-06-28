# TODO: Bytecode Virtual Machine

Write a Python script implementing a stack-based bytecode virtual machine.

## Requirements
- Define a bytecode instruction set: `PUSH_CONST`, `POP`, `ADD`, `SUB`, `MUL`, `DIV`, `MOD`, `NEG`, `EQ`, `LT`, `GT`, `AND`, `OR`, `NOT`, `JUMP`, `JUMP_IF_FALSE`, `LOAD_VAR`, `STORE_VAR`, `CALL`, `RETURN`, `PRINT`, `HALT`
- Implement a `Compiler` that translates the tiny language from task [56] into bytecode
- Implement a `VM` class with: operand stack, call stack, variable frames, instruction pointer
- Implement function calls with argument passing and local variable scopes
- Disassembler: print each instruction with its operands
- Trace mode (`--trace`): print stack state after each instruction
- Benchmark the VM against the tree-walking interpreter from task [56]
