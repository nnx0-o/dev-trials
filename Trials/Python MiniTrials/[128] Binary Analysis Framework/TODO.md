# TODO: Binary Analysis Framework

Write a Python script implementing a framework for analyzing binary executables.

## Requirements
- Parse ELF binary format: ELF header, section headers, program headers, symbol table, string table, relocation entries
- Parse PE (Portable Executable) format: DOS header, PE header, optional header, section table, import directory, export directory
- Implement a disassembler for x86-64 using a hand-written decoder for the most common instructions (at least 50 opcodes including REX prefix handling)
- Control-flow graph construction: identify basic blocks and edges (jumps, calls, fall-throughs)
- Function identification: locate function entry points via symbol table and prologue pattern matching
- String extraction: find all printable ASCII strings of length ≥ 4
- Entropy analysis: compute Shannon entropy per section to detect packed/encrypted sections
- CLI: `python baf.py <binary> [--disasm <addr>] [--cfg <func>] [--strings] [--sections]`
