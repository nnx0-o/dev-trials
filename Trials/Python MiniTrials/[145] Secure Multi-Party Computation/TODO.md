# TODO: Secure Multi-Party Computation

Write a Python script implementing secure multi-party computation protocols.

## Requirements
- Implement **Shamir's Secret Sharing**: split a secret into N shares, any K of which reconstruct it via Lagrange interpolation over a finite field (prime p = 2^127 - 1)
- Implement **Additive Secret Sharing**: split a value among 3 parties; implement addition and multiplication of shared values without revealing individual shares
- Implement the **BGW protocol** (Ben-Or-Goldwasser-Wigderson) for secure computation of arithmetic circuits: AND/OR/XOR gates over shares
- Demonstrate: compute the sum of salaries of 5 parties without any party learning others' salaries; compute the maximum salary; determine if two parties have the same password
- Simulate all parties as threads communicating through queues
- Verify results match plaintext computation
