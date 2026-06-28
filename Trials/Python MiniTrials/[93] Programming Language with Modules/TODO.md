# TODO: Programming Language with Modules

Write a Python script implementing a complete interpreted language with a module system.

## Requirements
- Extend the language from task [70] with: string type and operations, arrays with index/slice, hashmaps, `import <module>`, `export` declarations, first-class functions, closures, variadic arguments `(*args)`
- Implement a module resolver: find `.lang` files in a search path, cache loaded modules
- Implement a standard library as built-in modules: `math`, `string`, `io`, `list`
- Implement proper tail calls
- Implement a garbage collector: mark-and-sweep over all in-scope variables and closures
- Type system: dynamic typing with runtime type checks and descriptive error messages
- REPL with `import` support
- Write a self-contained example program of at least 100 lines in the new language
