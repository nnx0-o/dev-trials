# TODO: P2P DHT (Chord Protocol Simulation)

Write a Python script simulating the Chord distributed hash table protocol.

## Requirements
- Simulate N nodes (default 8) arranged in a ring with IDs in space 0 to 2^m-1 (m=6)
- Each node maintains a finger table of m entries pointing to successors
- Implement `lookup(key)` that routes a query through the ring in O(log N) hops, printing each hop
- Implement `join(node_id)`: a new node joins the ring and updates finger tables of affected nodes
- Implement `leave(node_id)`: a node gracefully departs and migrates its keys to its successor
- Simulate key/value storage: keys are hashed to the responsible node
- Print the full ring state (each node, its successor, and its finger table) after each operation
