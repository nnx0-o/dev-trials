# TODO: Persistent Immutable Data Structures

Write a Python script implementing purely functional persistent data structures.

## Requirements
- Implement a **persistent singly-linked list**: `cons`, `head`, `tail`, `nth`, all returning new versions without mutating
- Implement a **persistent binary search tree** (path copying): `insert`, `delete`, `lookup`, `to_sorted_list`; each operation returns a new root while sharing unchanged nodes
- Implement a **persistent array** (balanced binary trie with branching factor 32, similar to Clojure's PersistentVector): O(log₃₂ N) index and update; `append`, `get`, `set`, `to_list`
- Implement a **persistent hash map** (HAMT — Hash Array Mapped Trie): `get`, `set`, `delete`; structural sharing with 32-way branching
- Benchmark: compare memory usage and operation time of persistent vs mutable versions at 100K operations
