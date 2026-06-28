# TODO: Database Engine from Scratch

Write a Python script implementing a basic relational database engine stored on disk.

## Requirements
- Implement a B-tree stored in a binary file for index storage
- Table storage: fixed-size pages (4096 bytes) containing row data in a slotted page format
- Support SQL subset: `CREATE TABLE`, `INSERT INTO`, `SELECT ... FROM ... WHERE`, `UPDATE`, `DELETE`, `CREATE INDEX`
- Implement a SQL tokenizer and recursive-descent parser for the above subset
- Implement a query planner that uses indexes when available
- Implement transaction log (WAL): write-ahead logging for crash recovery
- Support `BEGIN`, `COMMIT`, `ROLLBACK`
- CLI: a SQL REPL that accepts queries, prints results in a table, and shows query execution plan on `EXPLAIN`
