# TODO: Persistent B+ Tree

Write a Python script implementing a persistent B+ tree stored on disk.

## Requirements
- Store the B+ tree in a single binary file with fixed-size pages (4096 bytes)
- Each page is either an internal node (keys + child page IDs) or a leaf node (keys + values + next-leaf pointer)
- Configurable order `t` (minimum degree, default 50)
- Operations: `insert(key, value)`, `search(key)`, `delete(key)`, `range_query(lo, hi)` using the linked leaf list
- All pages are read via `mmap`; dirty pages are tracked and flushed on commit
- Implement copy-on-write for crash-safe updates: write new pages, then atomically update the root pointer in the file header
- Implement a page cache with LRU eviction (configurable cache size in pages)
- Benchmark: 1M sequential inserts, 1M random reads, 1M range queries; report ops/sec
