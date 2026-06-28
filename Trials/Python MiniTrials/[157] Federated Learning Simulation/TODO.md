# TODO: Federated Learning Simulation

Write a Python script simulating federated machine learning.

## Requirements
- Simulate N clients (default 10), each with a private local dataset (partitions of the MNIST CSV or a synthetic dataset)
- Central server coordinates training: `FedAvg` algorithm
- Each round: server broadcasts global model weights; each client trains locally for E epochs on its data; clients send weight updates back
- Server aggregates updates: weighted average by dataset size
- Implement **differential privacy**: add Gaussian noise to each client's gradient before uploading (configurable epsilon, delta)
- Implement **Byzantine fault tolerance**: use coordinate-wise median aggregation to resist up to f malicious clients sending poisoned gradients
- Simulate a malicious client that sends scaled gradients to degrade the model
- Track global accuracy on a held-out test set per round; plot convergence curves as ASCII
