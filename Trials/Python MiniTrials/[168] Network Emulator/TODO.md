# TODO: Network Emulator

Write a Python script implementing a network emulator with configurable impairments.

## Requirements
- Implement a virtual switch: connect virtual hosts via virtual links; each link has configurable bandwidth, latency, jitter, and packet loss rate
- Virtual hosts communicate by passing packets through the switch
- Packet scheduler: implement FIFO, strict priority (8 queues), and WFQ (Weighted Fair Queuing)
- Implement a leaky bucket and token bucket rate limiter
- Implement packet reordering simulation
- Run TCP congestion control algorithms in simulation: implement slow start, AIMD, fast retransmit, fast recovery
- Plot throughput vs time for TCP flows competing on a bottleneck link (ASCII chart)
- Measure and report: throughput, latency distribution, packet loss rate, fairness index (Jain's fairness)
