# TODO: Quantum Computing Simulator

Write a Python script simulating a quantum computer using statevector simulation.

## Requirements
- Represent an n-qubit system as a statevector of 2^n complex amplitudes using nested Python lists
- Implement single-qubit gates: H (Hadamard), X (Pauli-X/NOT), Y, Z, S, T, Rx(θ), Ry(θ), Rz(θ)
- Implement two-qubit gates: CNOT, CZ, SWAP
- Implement measurement: collapse the statevector and return a classical bit based on Born rule probabilities
- Implement `run_shots(circuit, n=1000)`: run the circuit N times and return a frequency histogram
- Build a circuit DSL: `q = QuantumCircuit(3); q.h(0); q.cnot(0,1); q.measure_all()`
- Demonstrate: Bell state preparation, Deutsch-Jozsa algorithm, Grover's search (2-qubit)
- Print probability distribution as an ASCII histogram
