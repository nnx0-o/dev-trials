# TODO: Hardware Description Language Simulator

Write a Python script implementing a simulator for a subset of Verilog RTL.

## Requirements
- Parse a subset of Verilog: `module`/`endmodule`, `input`/`output`/`wire`/`reg` declarations, `assign` (combinational), `always @(posedge clk)` blocks, `if/else`, `case/endcase`, arithmetic and logical operators, concatenation `{a, b}`, bit slicing `a[3:0]`
- Build a netlist of combinational and sequential elements
- Implement cycle-accurate simulation: on each clock edge, evaluate all `always` blocks in topological order; evaluate all `assign` statements
- Implement a four-valued logic system: 0, 1, X (unknown), Z (high-impedance)
- Simulate and verify: a D flip-flop, a 4-bit counter, an 8-bit LFSR, a synchronous FIFO, and a simple ALU
- Output VCD (Value Change Dump) waveform files
