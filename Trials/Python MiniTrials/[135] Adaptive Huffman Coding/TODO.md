# TODO: Adaptive Huffman Coding

Write a Python script implementing the FGK (Faller-Gallager-Knuth) adaptive Huffman coding algorithm.

## Requirements
- Implement the Huffman tree data structure with sibling property maintenance: each node stores weight, order number, parent, left/right children
- Implement the FGK `update(symbol)` procedure: find the symbol's node (or create it), increment weights, perform swaps to maintain the sibling property
- Implement `encode(symbol)` and `decode(bit_stream)` using the current tree state
- The tree is updated identically on both encoder and decoder sides from the same symbol stream
- Compress a file byte by byte using the adaptive tree
- Decompress and verify round-trip correctness
- Compare compression ratio against static Huffman coding and raw data
- Report: input size, compressed size, ratio, encoding time, decoding time
