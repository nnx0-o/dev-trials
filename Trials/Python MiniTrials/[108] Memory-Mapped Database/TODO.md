# TODO: Memory-Mapped Database

Write a Python script implementing a key-value store using memory-mapped files.

## Requirements
- Use `mmap` to map a fixed-size file (default 64MB) into memory
- Implement an open-addressing hash table inside the mmap region with linear probing
- File header (first 64 bytes): magic number, version, table size, entry count, load factor threshold
- Each bucket: status byte (EMPTY/OCCUPIED/DELETED), key length (2 bytes), value length (4 bytes), key bytes, value bytes
- When load factor exceeds 0.7, trigger rehashing into a new larger mmap region
- Implement `get(key)`, `set(key, value)`, `delete(key)`, `keys()`, `compact()` (remove DELETED entries)
- Durability: call `mmap.flush()` after every write
- Benchmark: 100K random reads and writes; report ops/second
