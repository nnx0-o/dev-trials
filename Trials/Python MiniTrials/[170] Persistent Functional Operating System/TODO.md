# TODO: Persistent Functional Operating System

Write a Python script implementing an operating system with a persistent functional filesystem.

## Requirements
- Filesystem: a purely functional persistent tree (from task [133]) where every mutation creates a new version; each version is the root of a complete directory tree
- Support: `mkdir`, `rmdir`, `create`, `read`, `write`, `rename`, `ls`, `stat`
- Implement **snapshots**: name any version; `snapshot list`, `snapshot restore <name>`, `snapshot diff <v1> <v2>`
- Implement a **transactional file system**: `begin`, `commit`, `abort`; concurrent transactions are isolated
- Process model: processes have capability tokens to access filesystem resources; capabilities are unforgeable and delegatable
- Implement a shell that supports all filesystem commands, snapshots, and transactions
- Demonstrate: file edit, snapshot, modify, restore; concurrent transactional writes with conflict detection
