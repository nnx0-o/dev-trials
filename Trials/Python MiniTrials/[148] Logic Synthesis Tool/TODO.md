# TODO: Logic Synthesis Tool

Write a Python script implementing a digital logic synthesis and optimization tool.

## Requirements
- Represent Boolean functions as truth tables and as Sum-of-Products (SOP) expressions
- Implement the **Quine-McCluskey algorithm**: find all prime implicants and select a minimum cover
- Implement the **Petrick's method** for finding the minimum SOP from prime implicants
- Implement the **ESPRESSO heuristic** (simplified): expand, reduce, irredundant cover
- Convert logic functions to a network of 2-input gates: AND, OR, NOT, NAND, NOR, XOR
- Implement technology mapping: replace sub-circuits with library cells (4 standard cells) to minimize gate count or delay
- Parse logic functions from either truth tables or Boolean expressions
- Output synthesized circuits as a netlist (DOT format) and compute critical path delay
