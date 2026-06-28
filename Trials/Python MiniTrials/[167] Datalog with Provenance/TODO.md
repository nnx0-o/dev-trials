# TODO: Datalog with Provenance

Write a Python script extending the Datalog engine from task [137] with provenance tracking.

## Requirements
- **Why-provenance**: for each derived fact, store the set of proof trees (sets of base facts) that support it
- **How-provenance**: annotate each fact with a provenance polynomial (sum-of-products over base fact tokens)
- Implement provenance semirings: Boolean semiring (standard Datalog), counting semiring (count derivations), tropical semiring (best cost derivation)
- Implement **lineage queries**: given a derived fact, trace back all contributing base facts
- Implement **hypothetical queries**: if a base fact is removed, what derived facts are lost?
- Implement **most-probable derivation**: assign probabilities to base facts, compute probability of derived facts via provenance polynomials
- Demonstrate on an access-control policy database: which rules justified granting access to a resource?
