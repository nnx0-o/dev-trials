# TODO: Peer-to-Peer File Transfer

Write a Python script enabling direct file transfer between two machines over a local network.

## Requirements
- `sender.py`: scan for a free port, bind a TCP server, print the IP and port, wait for exactly one connection, then send the file in chunks with a progress bar
- `receiver.py`: accept IP and port as arguments, connect, receive file chunks, reassemble, and save to disk
- Protocol: send a header first (JSON encoded, newline terminated) containing filename, file size, and SHA-256 hash
- After transfer, receiver verifies the hash and prints `Transfer complete. Checksum OK.` or `Checksum MISMATCH!`
- Support large files (>1 GB) via chunked transfer (64 KB chunks)
- Show real-time transfer speed (MB/s) on both ends
