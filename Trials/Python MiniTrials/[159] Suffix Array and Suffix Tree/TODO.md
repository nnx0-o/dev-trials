# TODO: Suffix Array and Suffix Tree

Write a Python script implementing suffix arrays and suffix trees for fast string operations.

## Requirements
- Implement the **SA-IS algorithm** for O(N) suffix array construction
- Implement the **LCP array** computation using Kasai's algorithm
- Build a **compressed suffix tree** from the suffix array + LCP array
- Support the following queries in O(P + occ) time: `find_all(pattern)` (find all occurrences), `count(pattern)` (count occurrences), `longest_repeated_substring()`, `longest_common_substring(s1, s2)`
- Implement the **Burrows-Wheeler Transform** using the suffix array
- Implement **BWT-based compression** (BWT + move-to-front + RLE)
- Benchmark vs naive search on a 10MB text file
- Demonstrate all features on a DNA sequence dataset
