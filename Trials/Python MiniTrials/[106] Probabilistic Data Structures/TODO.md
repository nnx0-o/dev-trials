# TODO: Probabilistic Data Structures

Write a Python script implementing and demonstrating three probabilistic data structures.

## Requirements
- **Bloom Filter**: configurable size and number of hash functions; `add(item)`, `contains(item)` (with false positive rate); report actual false positive rate on a test set
- **HyperLogLog**: estimate cardinality of large sets; implement the 32-bit hash version with configurable precision; compare estimate vs actual count on sets of 10K–1M elements
- **Count-Min Sketch**: frequency estimation; `add(item)`, `estimate(item)`; demonstrate on a word frequency task from a large text file
- For each: explain the theory in comments, implement the hash functions from scratch, and benchmark against a naive `set`/`dict` approach showing memory and time savings
