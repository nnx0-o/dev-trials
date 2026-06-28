# TODO: FPGA Bitstream Generator

Write a Python script implementing a simple FPGA architecture and bitstream generator.

## Requirements
- Define an FPGA architecture: N×N grid of CLBs (Configurable Logic Blocks), each with a 4-LUT and a flip-flop; routing resources (switch boxes and connection boxes between CLBs)
- Each 4-LUT is configured by a 16-bit truth table
- Implement a technology mapper: convert a gate-level netlist (from task [148]) to LUT configurations
- Implement a placement algorithm (simulated annealing): assign each LUT to a physical CLB location, minimizing wire length
- Implement a routing algorithm (Pathfinder/negotiation-based): find paths through the routing fabric for each net
- Generate a bitstream: a binary file encoding all LUT contents and routing switch configurations
- Simulate the configured FPGA and verify it computes the correct function
