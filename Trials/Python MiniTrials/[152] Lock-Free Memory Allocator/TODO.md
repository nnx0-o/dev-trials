# TODO: Lock-Free Memory Allocator

Write a Python script implementing a lock-free memory allocator simulation.

## Requirements
- Simulate a flat memory arena of N bytes (default 1MB) as a `bytearray`
- Implement **slab allocation**: maintain separate free lists for size classes (8, 16, 32, 64, 128, 256, 512, 1024, 2048 bytes), served from fixed-size slabs
- Large allocations (>2048 bytes) use a first-fit search in a free list of variable regions
- Implement the free list as a lock-free stack (Treiber stack) using `threading` CAS simulation (use a `threading.Lock` per pointer slot to simulate atomic CAS)
- Thread-local caches: each thread caches a batch of blocks per size class to reduce contention
- Implement `malloc(size)`, `free(ptr)`, `calloc(n, size)`, `realloc(ptr, new_size)`
- Benchmark: 8 threads doing random alloc/free cycles; report throughput and fragmentation
