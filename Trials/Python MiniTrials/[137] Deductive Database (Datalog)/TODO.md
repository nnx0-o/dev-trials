# TODO: Deductive Database (Datalog)

Write a Python script implementing a Datalog engine.

## Requirements
- Parse Datalog programs: facts `parent(tom, bob).` and rules `ancestor(X, Y) :- parent(X, Y).`
- Represent facts as tuples stored in an in-memory relation database
- Implement the bottom-up (naive) evaluation strategy: repeatedly fire rules until fixpoint
- Implement the semi-naive evaluation strategy: only re-evaluate rules when new facts are derived in the current round
- Support negation-as-failure (stratified negation)
- Implement query answering: `:- ancestor(tom, X)?` returns all matching bindings
- Support arithmetic constraints: `X > Y`, `X is Y + 1`
- Interactive REPL: load a `.dl` file, then accept queries
- Demonstrate with: family relationships, graph reachability, type inference rules, and a small company hierarchy
