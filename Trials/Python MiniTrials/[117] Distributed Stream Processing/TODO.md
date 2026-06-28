# TODO: Distributed Stream Processing

Write a Python script implementing a simplified Apache Kafka-like stream processing system.

## Requirements
- `Broker`: manages topics; each topic is a list of partitions; each partition is an ordered log (append-only file)
- `Producer`: connects to the broker, selects partition via round-robin or key-hash, appends messages
- `Consumer`: connects to the broker with a group ID; subscribes to topics; tracks offset per partition; supports `auto.offset.reset=earliest/latest`
- Consumer groups: partitions are distributed among consumers in the same group; rebalancing when a consumer joins/leaves
- Implement at-least-once delivery semantics
- `StreamProcessor`: consumes from input topics, applies a transform function, produces to output topics
- Demo: a log processing pipeline: raw logs → parse → filter errors → count per minute → output to `error_counts` topic
