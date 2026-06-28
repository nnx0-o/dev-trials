# TODO: Blockchain Implementation

Write a Python script implementing a simplified blockchain.

## Requirements
- `Block` class: index, timestamp, data (list of transactions), previous hash, nonce, hash
- `Blockchain` class: genesis block, `add_block(data)`, `is_valid()`, `mine_block(difficulty)` (proof-of-work)
- Hash = SHA-256 of (index + timestamp + str(data) + previous_hash + str(nonce))
- Mining: increment nonce until hash starts with `difficulty` leading zeros
- `Transaction` class: sender, receiver, amount, and cryptographic signature using `hmac`
- Implement a wallet: key pair (simulated), sign transaction, verify signature
- Build a simple CLI: add transactions, mine a block, view chain, verify chain integrity
- Detect and report tampering when `is_valid()` fails
