# TODO: Zero-Knowledge Proof System

Write a Python script implementing zero-knowledge proof protocols.

## Requirements
- Implement the **Schnorr identification protocol**: prover knows `x` such that `y = g^x mod p`; 3-round interactive proof
- Convert to a **non-interactive Schnorr signature** (Fiat-Shamir heuristic) using SHA-256 as the random oracle
- Implement the **Pedersen commitment scheme**: `commit(m, r) = g^m * h^r mod p`; homomorphic property: `commit(m1+m2) = commit(m1) * commit(m2)`
- Implement a **range proof**: prove that a committed value lies in [0, 2^n) without revealing it, using bit decomposition and Pedersen commitments
- Implement a simple **zk-SNARK** (Groth16) for an arithmetic circuit: R1CS representation, QAP transformation (for a circuit with 5 constraints)
- Demonstrate: prove knowledge of a password hash preimage; prove a number is in range [18, 120]
