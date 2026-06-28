# TODO: Markov Chain Text Generator

Write a Python script that builds a Markov chain language model from a text corpus and generates new text.

## Requirements
- Read a plain text file (provided as a command-line argument) as the training corpus
- Build an N-gram Markov model (N configurable, default 2) that maps sequences of N words to lists of possible next words
- Implement `generate(seed, length)` that starts from a random or user-specified seed and produces `length` words by sampling the chain
- Implement two sampling strategies: uniform random and temperature-scaled probability (temperature configurable via `--temp`)
- Print the generated text as formatted paragraphs of ~80 characters per line
- Report: vocabulary size, total N-gram count, average branching factor
- Allow saving and loading the trained model to/from a JSON file
