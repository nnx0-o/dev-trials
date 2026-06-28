# TODO: Symbolic Math Engine

Write a Python script implementing a symbolic mathematics library.

## Requirements
- Represent expressions as AST nodes: `Num(n)`, `Var(name)`, `Add`, `Sub`, `Mul`, `Div`, `Pow`, `Sin`, `Cos`, `Exp`, `Ln`
- Implement `__add__`, `__mul__`, etc. on nodes to build expressions naturally
- Implement `simplify(expr)`: apply algebraic identities (e.g., x+0=x, x*1=x, 0*x=0, x^0=1)
- Implement `differentiate(expr, var)`: symbolic differentiation with chain/product/quotient rules
- Implement `evaluate(expr, env)`: substitute variable values and compute numerically
- Implement `to_string(expr)`: pretty-print with correct operator precedence and minimal parentheses
- Demonstrate: differentiate `sin(x^2) * exp(x)` with respect to `x`, simplify, and evaluate at `x=1`
