# TODO: Verified Cryptographic Protocol

Write a Python script implementing and formally verifying a cryptographic protocol.

## Requirements
- Implement the **TLS 1.3 handshake** (simplified): ClientHello, ServerHello, key exchange (X25519 ECDH — implement the Montgomery ladder from scratch), certificate verification (RSA signature), Finished messages (HMAC)
- Implement the **Noise Protocol Framework**: implement the `Noise_XX` pattern (mutual authentication) using the primitives from task [119]
- Formal verification using the **applied pi-calculus** model (encoded in Python): represent the protocol as message-passing processes, symbolically track the adversary's knowledge
- Verify: **secrecy** of the session key (adversary cannot compute it), **authentication** (both parties agree on the peer identity), **forward secrecy** (compromise of long-term key doesn't reveal past sessions)
- Demonstrate an active attack on a flawed version and show the verifier detects it
