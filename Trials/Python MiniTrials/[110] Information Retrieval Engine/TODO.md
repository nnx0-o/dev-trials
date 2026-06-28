# TODO: Information Retrieval Engine

Write a Python script implementing a full-text search engine.

## Requirements
- Index a directory of plain text documents
- Build an inverted index: for each term, store a posting list of (doc_id, [positions]) pairs
- Implement text preprocessing: lowercasing, tokenization, stopword removal, and Porter stemming (implement the stemmer from the algorithm specification)
- Support queries: single-term, multi-term (AND/OR), phrase (exact word sequence), and proximity (words within N positions)
- Rank results using TF-IDF weighting
- Implement BM25 as an alternative ranking function
- Persist the index to disk using a binary format
- CLI: index a directory, then enter a query loop; show results with title, score, and a highlighted snippet
