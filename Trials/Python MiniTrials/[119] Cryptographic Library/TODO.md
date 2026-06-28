# TODO: Cryptographic Library

Write a Python script implementing cryptographic primitives from scratch (for educational purposes).

## Requirements
- Implement **SHA-256**: message padding, 64 rounds of compression, correct for any input length
- Implement **AES-128 ECB mode**: SubBytes, ShiftRows, MixColumns, AddRoundKey; both encrypt and decrypt
- Implement **AES-128 CBC mode** building on ECB
- Implement **PBKDF2** key derivation using HMAC-SHA256 (implement HMAC from scratch)
- Implement **RSA**: key generation (find large primes via Miller-Rabin primality test), encrypt/decrypt with PKCS#1 v1.5 padding, sign/verify
- Implement **Diffie-Hellman** key exchange with a 2048-bit prime
- Validate all implementations against Python's `hashlib`/`hmac`/`cryptography` library outputs
- Never use any cryptography library; only Python standard library
