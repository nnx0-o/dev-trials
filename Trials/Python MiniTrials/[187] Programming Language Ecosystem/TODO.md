# TODO: Programming Language Ecosystem

Write a Python script building a complete programming language toolchain.

## Requirements
- Combine tasks [70], [84], [93], [98], and [116] into a coherent ecosystem for the same language
- **Compiler driver**: `lang compile [--emit ast|ir|asm|bytecode] <file>` runs the full pipeline
- **Package manager**: `lang install <pkg>`, `lang publish`, `lang.json` manifest (name, version, dependencies); packages are directories with a `src/` folder; resolve dependency versions using SemVer
- **Build system**: `lang build` compiles all source files in dependency order; incremental builds using file modification times and a `.lang_cache/` build database
- **Debugger**: `lang debug <file>` integrates the reversible debugger from task [109] with LSP-based editor integration
- **REPL**: `lang repl` with history, multiline input, and tab completion from the LSP
- **Documentation generator**: extract doc comments and generate HTML docs
