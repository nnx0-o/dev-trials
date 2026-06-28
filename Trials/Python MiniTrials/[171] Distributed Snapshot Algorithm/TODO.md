# TODO: Distributed Snapshot Algorithm

Write a Python script implementing the Chandy-Lamport distributed snapshot algorithm.

## Requirements
- Simulate a distributed system of N processes connected by FIFO channels (queues)
- Each process has local state (a counter being incremented) and sends messages to neighbors
- Implement the Chandy-Lamport algorithm: any process can initiate a snapshot by recording its local state and sending MARKER messages on all outgoing channels; when a process receives a MARKER for the first time, it records its local state and starts recording incoming channel state
- The global snapshot is consistent: no message sent after the cut appears before it
- Demonstrate with a token-ring money transfer: detect a stable property (total money is conserved)
- Implement Lai-Yang algorithm (for non-FIFO channels) as an alternative
- Visualize the global snapshot as a space-time diagram in ASCII
