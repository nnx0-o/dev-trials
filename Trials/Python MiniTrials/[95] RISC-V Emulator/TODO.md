# TODO: RISC-V Emulator

Write a Python script implementing a RISC-V RV32I instruction set emulator.

## Requirements
- Implement 32 general-purpose registers (x0–x31, with x0 hardwired to 0)
- Implement all RV32I base instructions: LUI, AUIPC, JAL, JALR, branch instructions (BEQ/BNE/BLT/BGE/BLTU/BGEU), load instructions (LB/LH/LW/LBU/LHU), store instructions (SB/SH/SW), immediate arithmetic (ADDI/SLTI/SLTIU/XORI/ORI/ANDI/SLLI/SRLI/SRAI), and register arithmetic (ADD/SUB/SLL/SLT/SLTU/XOR/SRL/SRA/OR/AND)
- Implement a flat memory model of 64KB
- Load ELF binaries or flat binary files
- Implement basic ECALL: `write(1, buf, len)` for stdout output
- Single-step mode: print register state and disassembly after each instruction
- Run a compiled "Hello, World!" RISC-V binary
