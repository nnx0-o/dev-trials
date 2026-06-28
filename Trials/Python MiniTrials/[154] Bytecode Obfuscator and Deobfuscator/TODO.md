# TODO: Bytecode Obfuscator and Deobfuscator

Write a Python script implementing a Python bytecode obfuscator and deobfuscator.

## Requirements
- Use the `dis` and `marshal` modules to load `.pyc` files
- Implement the following obfuscation transforms on the `code` object:
  1. **Constant encryption**: XOR all string constants with a random key; insert decryption stubs
  2. **Opaque predicates**: insert dead branches whose conditions always evaluate the same way
  3. **Control-flow flattening**: dispatch all basic blocks through a central `while + switch` loop
  4. **Name mangling**: rename all local variables and function names to unreadable identifiers
  5. **Junk instruction injection**: insert no-op sequences that don't change stack depth
- Write the obfuscated bytecode to a new `.pyc` file
- Verify the obfuscated code produces identical output to the original
- Implement a deobfuscator that reverses steps 1 and 5
