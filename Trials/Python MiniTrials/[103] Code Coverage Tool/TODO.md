# TODO: Code Coverage Tool

Write a Python script implementing a code coverage measurement tool.

## Requirements
- Use `sys.settrace()` to intercept line-level execution events
- Implement a `Coverage` class with `start()`, `stop()`, `report()` methods
- Track executed lines per source file, distinguishing executable vs non-executable lines (comments, blank lines, function defs)
- Parse the source file's AST to determine branch points (`if`, `while`, `for`, `try`)
- Track branch coverage: for each branch point, record which branches (true/false) were taken
- `report()`: print a per-file table with line coverage %, branch coverage %, and mark uncovered lines with `!`
- Generate an HTML report: source code with covered lines in green and uncovered in red, using inline styles
- Integrate with `unittest`: run a test suite file and report coverage on the module under test
