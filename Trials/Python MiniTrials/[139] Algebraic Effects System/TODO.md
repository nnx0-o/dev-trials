# TODO: Algebraic Effects System

Write a Python module implementing algebraic effects and handlers.

## Requirements
- Implement `Effect` base class: each effect is a class with a payload
- Implement `perform(effect)`: raise the effect up the call stack via a special exception
- Implement `handle(computation, handler_dict)`: catch effects, dispatch to handler, and optionally resume the computation with a value using Python generators (coroutines)
- Support resumable effects: `handler_dict = { ExceptionEffect: lambda e, resume: resume(default_value) }`
- Implement built-in effect handlers: `State` (get/put), `IO` (print/readline), `Nondeterminism` (choose/fail), `Exception` (raise/catch), `Async` (await)
- Effect stacking: multiple handlers can be layered
- Demo: reimplement Python exceptions, mutable state, and cooperative concurrency using algebraic effects
- Compare verbosity and flexibility to native Python constructs
