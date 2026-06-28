# TODO: Regular Expression Engine

Write a Python script implementing a basic regular expression engine from scratch.

## Requirements
- Support the following features: literal characters, `.` (any character), `*` (zero or more), `+` (one or more), `?` (zero or one), `^` (start anchor), `$` (end anchor), `[abc]` (character class), `[^abc]` (negated class), `\d`, `\w`, `\s` shortcuts, and `(group)` grouping
- Implement NFA (Non-deterministic Finite Automaton) construction from the pattern
- Implement NFA simulation via epsilon-closure and move sets
- Implement `match(pattern, string)` and `findall(pattern, string)`
- Validate your engine against Python's `re` module on a suite of 30 test cases
- Print the NFA state graph for small patterns
