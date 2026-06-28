# TODO: Differentiable Programming System

Write a Python script implementing a differentiable programming system with source code transformation.

## Requirements
- Implement forward-mode automatic differentiation via **dual numbers**: `DualNumber(real, dual)` where dual carries the derivative; override arithmetic operations
- Implement reverse-mode AD via **source transformation**: parse a Python function's AST, generate a new AST for the gradient function (the adjoint code)
- Adjoint code generation: for each statement `z = f(x, y)` generate `x̄ += z̄ * ∂f/∂x; ȳ += z̄ * ∂f/∂y` in reverse order
- Support: `+`, `-`, `*`, `/`, `**`, `sin`, `cos`, `exp`, `log`, control flow (branch gradients)
- Implement **gradient checkpointing**: trade memory for recomputation in deep computations
- Verify forward and reverse mode agree and match numerical finite differences
- Demonstrate: gradient descent optimization of a 10-variable function, and adjoint method for ODE sensitivity analysis
