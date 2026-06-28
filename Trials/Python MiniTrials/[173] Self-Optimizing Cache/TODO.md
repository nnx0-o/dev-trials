# TODO: Self-Optimizing Cache

Write a Python script implementing a self-optimizing cache that learns from access patterns.

## Requirements
- Implement and benchmark 5 eviction policies: **LRU**, **LFU**, **ARC** (Adaptive Replacement Cache), **LIRS** (Low Inter-reference Recency Set), **TinyLFU** (frequency sketch + LRU window)
- Implement a **Markov prefetcher**: model access sequences as a k-th order Markov chain; on each access, prefetch the most probable next item
- Implement a **reinforcement learning cache policy**: model cache management as an MDP; use Q-learning to learn when to evict and when to prefetch from access history
- Simulate access patterns: uniform random, Zipfian (power-law), sequential scan, LRU-hostile (cyclic)
- Measure hit rate, byte hit rate, eviction rate for each policy on each workload
- Print a comparison matrix: policies × workloads × metrics
