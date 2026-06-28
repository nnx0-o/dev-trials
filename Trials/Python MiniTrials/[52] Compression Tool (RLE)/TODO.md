# TODO: Compression Tool (RLE)

Write a Python script implementing Run-Length Encoding (RLE) compression and decompression.

## Requirements
- Implement `rle_compress(data: bytes) -> bytes` and `rle_decompress(data: bytes) -> bytes`
- Encoding format: each run is stored as (count, byte) pairs using 2-byte sequences
- Handle runs longer than 255 by splitting them
- Add a 4-byte magic header `RLE1` and the original file size to the compressed output
- CLI usage: `python rle.py compress <input> <output>` and `python rle.py decompress <input> <output>`
- Print compression ratio: `Compressed: <original> bytes → <compressed> bytes (<ratio>%)`
- Verify round-trip correctness by decompressing and comparing with the original
