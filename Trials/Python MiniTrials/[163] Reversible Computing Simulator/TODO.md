# TODO: Reversible Computing Simulator

Write a Python script simulating reversible computing.

## Requirements
- Implement the **Toffoli gate** (CCNOT) and show it is universal for reversible computation
- Implement the **Fredkin gate** (CSWAP)
- Implement a reversible circuit as a sequence of Toffoli and Fredkin gates on N bits
- Implement a circuit compiler that converts classical Boolean circuits (AND, OR, NOT) to reversible circuits using ancilla bits, minimizing ancilla count
- Implement the **Bennett method** for reversible simulation: run forward (produce output + intermediate bits), copy output, run backward (uncompute intermediates)
- Simulate AND, OR, XOR, full adder, and an 8-bit ripple-carry adder as reversible circuits
- Count gate count, ancilla bits, and verify reversibility by running forward then backward and checking return to initial state
