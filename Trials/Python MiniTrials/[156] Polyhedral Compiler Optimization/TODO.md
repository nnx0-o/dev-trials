# TODO: Polyhedral Compiler Optimization

Write a Python script implementing polyhedral loop optimizations.

## Requirements
- Parse simple affine loop nests: `for i in range(N): for j in range(M): A[i][j] = B[i-1][j] + C[i][j-1]`
- Represent the iteration domain as a polyhedron (set of integer points satisfying linear inequalities)
- Build a dependence polyhedron: for each pair of memory accesses, compute the set of iteration pairs where they access the same memory location
- Implement the **Farkas Lemma** test for dependence existence
- Implement **loop tiling/blocking**: transform the iteration space to improve cache locality
- Implement **loop interchange**: permute loop nesting order; check legality using the dependence matrix
- Implement **loop fusion**: merge two adjacent loops; check for dependence violations
- Generate optimized loop code from the transformed polyhedra
