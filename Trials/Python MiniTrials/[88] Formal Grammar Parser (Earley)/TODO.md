# TODO: Formal Grammar Parser (Earley)

Write a Python script implementing the Earley parsing algorithm for arbitrary context-free grammars.

## Requirements
- Represent grammars in a simple text format: `S -> NP VP`, `NP -> Det N`, etc.
- Parse a grammar file and build a `Grammar` object with rules grouped by head symbol
- Implement the Earley chart parser: `Predict`, `Scan`, and `Complete` operations
- Build an Earley chart (list of sets of `EarleyItem` objects)
- After parsing, determine if the input string is accepted by the grammar
- Extract all parse trees from the chart and print them as ASCII trees
- Handle ambiguous grammars (multiple parse trees)
- Demonstrate with an English phrase structure grammar and at least 5 example sentences
