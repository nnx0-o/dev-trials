# TODO: Caesar Cipher

Write a Python script that encrypts and decrypts text using the Caesar cipher.

## Requirements
- Ask the user for: the message, the shift value (integer), and the mode (`encrypt` or `decrypt`)
- Shift only alphabetic characters; preserve case; leave non-alphabetic characters unchanged
- For decryption, reverse the shift
- Print the result: `Result: <transformed text>`
- Handle shifts larger than 26 by using modulo
