# TODO: Database ORM (SQLite)

Write a Python script implementing a minimal ORM (Object-Relational Mapper) on top of SQLite.

## Requirements
- Implement a `Model` base class with class-level field descriptors supporting types: `IntField`, `StringField`, `FloatField`, `BoolField`, `DateField`
- `Model` subclasses automatically create their SQLite table on first use
- Implement CRUD class methods: `create(**kwargs)`, `get(id)`, `filter(**kwargs)`, `update(id, **kwargs)`, `delete(id)`, `all()`
- Support `order_by`, `limit`, and `offset` in queries
- Demonstrate with a `User` model and a `Post` model with a foreign key relationship
- Print generated SQL to the console in debug mode (`--debug` flag)
