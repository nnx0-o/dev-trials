# TODO: Algebraic Topology Computation

Write a Python script implementing computational algebraic topology algorithms.

## Requirements
- Represent **simplicial complexes**: 0-simplices (vertices), 1-simplices (edges), 2-simplices (triangles), 3-simplices (tetrahedra), stored as sets of tuples
- Implement the **boundary operator** as a matrix (chain complex)
- Compute **simplicial homology groups** via Smith normal form reduction of the boundary matrix over ℤ
- Implement Smith normal form for integer matrices (elementary row/column operations)
- Output homology groups as: `H_0 = ℤ^k`, `H_1 = ℤ^a ⊕ ℤ/n1 ⊕ ℤ/n2 ⊕ ...`
- Compute **Euler characteristic** from Betti numbers
- Implement **Vietoris-Rips complex** construction from a point cloud with parameter ε
- Implement **persistent homology**: track when homology classes are born and die as ε increases; output a persistence diagram
