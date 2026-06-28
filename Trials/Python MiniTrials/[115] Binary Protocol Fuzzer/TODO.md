# TODO: Binary Protocol Fuzzer

Write a Python script implementing a protocol fuzzer for testing network services.

## Requirements
- Define a protocol grammar in a JSON spec: fields with types (`uint8`, `uint16`, `uint32`, `bytes(n)`, `string(max_len)`), fixed values, and variable-length arrays
- Implement a spec-based fuzzer: generate valid-looking but boundary-testing inputs (empty fields, max-length values, integer overflows, null bytes, format strings)
- Implement mutation-based fuzzing: take a valid seed input (hex or binary file) and apply mutations: bit flip, byte flip, arithmetic increment/decrement, block insertion/deletion, interesting integer substitution
- Send fuzzed payloads to a target TCP host:port
- Detect crashes by monitoring for connection resets or timeouts; log crashing inputs to a `crashes/` directory
- Minimize crash inputs: find the shortest mutation that still causes a crash
- Report fuzzing statistics: total sent, crashes found, unique crashes
