# TODO: Distributed Consensus (Raft)

Write a Python script simulating the Raft consensus algorithm in a single process.

## Requirements
- Simulate N nodes (default 5) as threads, each running the Raft state machine
- Implement the three Raft roles: Follower, Candidate, Leader
- Implement leader election: randomized election timeouts, RequestVote RPC, vote counting
- Implement log replication: AppendEntries RPC (both heartbeat and log replication), commit index advancement
- Simulate network partitions and message drops via a configurable message delivery layer
- Log all state transitions and RPCs to a file
- After stabilization, submit log entries via a client and verify all nodes converge to the same log
- Demonstrate leader failover: kill the leader and show a new one being elected within 3 seconds
