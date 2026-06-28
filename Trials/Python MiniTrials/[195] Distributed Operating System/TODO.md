# TODO: Distributed Operating System

Write a Python script implementing a distributed operating system.

## Requirements
- Build on task [188]'s OS; extend it to run across a cluster of simulated nodes (each a thread)
- **Distributed naming**: a global flat namespace for processes, files, and services using a DHT (from task [78])
- **Distributed file system**: GFS-style (master + chunk servers); files are split into 64MB chunks; replication factor 3; master tracks chunk locations; clients talk to chunk servers directly
- **Distributed shared memory**: release-consistency protocol; pages migrated and replicated across nodes; lazy update propagation
- **Global scheduler**: bin-packing task placement across nodes considering resource utilization; workload migration
- **Consensus layer**: use Raft (from task [96]) for master election and configuration store
- **Failure recovery**: automatic restart of crashed processes on other nodes; file system recovery from chunk replica
