# TODO: Homomorphic Encryption Demo

Write a Python script demonstrating homomorphic encryption concepts.

## Requirements
- Implement **Paillier partially homomorphic encryption**: key generation (two large primes), encryption, decryption, and homomorphic addition (ciphertext × ciphertext = encrypt(m1 + m2))
- Implement **BFV somewhat homomorphic encryption** (simplified, small parameters): polynomial ring arithmetic mod q, encryption, decryption, homomorphic addition and multiplication (up to limited depth)
- Implement all big-integer arithmetic from scratch (or use Python's built-in `int` for arbitrary precision)
- Demonstrate Paillier: compute the sum of 5 encrypted salaries on a server; decrypt only the sum
- Demonstrate BFV: evaluate a degree-2 polynomial on an encrypted input
- Measure noise growth across operations and show when decryption fails
- Document the mathematics in comments
