# TODO: Distributed Key-Value Store

Write a Python script simulating a distributed key-value store with consistent hashing.

## Requirements
- Implement a `HashRing` with configurable virtual nodes per server
- `NodeServer` class: in-process simulated storage node with `get`, `set`, `delete` operations
- `KVClient` class: routes requests to the correct node using the hash ring
- Support node addition and removal with key migration (print migrated key count)
- Implement replication factor R: each key is stored on R consecutive nodes
- Implement quorum reads (R_R) and quorum writes (R_W)
- Simulate node failure by marking a node as down and rerouting requests
- Print the ring state (virtual node positions) as an ASCII circle
