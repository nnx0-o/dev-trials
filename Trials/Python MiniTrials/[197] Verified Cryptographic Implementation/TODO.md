# TODO: Verified Cryptographic Implementation

Write a Python script implementing cryptographic algorithms with formal verification of their properties.

## Requirements
- Implement AES, SHA-256, RSA, and Diffie-Hellman from task [119]
- Implement a **constant-time verification checker**: instrument the code with a symbolic execution engine (from task [166]) to verify that the execution time does not depend on secret inputs (secret independence)
- Implement a **fault injection simulator**: randomly flip bits during computation; check which errors cause detectable vs undetectable failures
- Implement the **differential power analysis** attack simulator: run AES many times with random plaintexts; simulate power consumption as Hamming weight of intermediate values; recover the key using correlation analysis
- Implement countermeasures: masking (randomize intermediate values), shuffling (randomize operation order)
- Demonstrate the attack before and after countermeasures; show the countermeasures defeat the attack
