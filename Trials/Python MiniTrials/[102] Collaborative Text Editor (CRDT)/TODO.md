# TODO: Collaborative Text Editor (CRDT)

Write a Python script implementing a collaborative text editor using a CRDT (Conflict-free Replicated Data Type).

## Requirements
- Implement the LSEQ or RGA (Replicated Growable Array) CRDT for ordered text sequences
- Each character has a globally unique ID (site_id + logical_clock)
- Operations: `insert(position, char, site_id)` and `delete(char_id)` both produce operation objects that can be applied in any order on any replica
- Demonstrate eventual consistency: apply a set of operations in different orders on 3 replicas and verify they converge to the same document
- Simulate two concurrent users editing the same document; show divergence and then convergence after sync
- Build a simple terminal UI (using `curses`) where two threads simultaneously edit the document and the display stays consistent
