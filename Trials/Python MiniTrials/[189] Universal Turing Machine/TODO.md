# TODO: Universal Turing Machine

Write a Python script implementing a Universal Turing Machine and a suite of encoded TMs.

## Requirements
- Implement a standard **Turing Machine**: tape (infinite in both directions, default blank symbol `_`), head, state set, transition function `δ(state, symbol) → (new_state, write_symbol, direction)`
- Implement a **Universal Turing Machine**: encode another TM's description on the tape using a standard encoding scheme (e.g., unary); simulate the encoded TM step by step
- Implement and demonstrate the following encoded TMs: binary increment, binary addition, palindrome recognizer, copy machine (duplicates the input), and a 3-state busy beaver
- Implement the **Busy Beaver** optimizer: find the N-state, 2-symbol TM that runs the longest before halting (search up to N=4)
- Visualize the tape as a scrolling ASCII display; show current state, head position, and step count
- Implement a TM debugger with breakpoints on states
