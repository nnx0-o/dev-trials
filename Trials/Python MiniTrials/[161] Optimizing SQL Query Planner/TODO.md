# TODO: Optimizing SQL Query Planner

Write a Python script implementing a cost-based SQL query optimizer.

## Requirements
- Extend the database from task [92] with statistics: table row count, column cardinality, histogram of value distribution
- Parse `SELECT ... FROM ... WHERE ... JOIN ... ORDER BY ... LIMIT` queries
- Logical plan: `Scan`, `Filter`, `Project`, `Join`, `Sort`, `Limit` operators in a tree
- Physical plan: `TableScan`, `IndexScan`, `NestedLoopJoin`, `HashJoin`, `SortMergeJoin`, `ExternalSort`, `TopK`
- Cost model: estimate output cardinality using selectivity formulas; cost = CPU cost + I/O cost (pages read)
- Implement dynamic programming join ordering (Selinger algorithm) for queries with up to 5 joins
- Implement predicate pushdown and projection pushdown as algebraic rewrites
- Print the query plan as a tree with cardinality and cost estimates at each node
