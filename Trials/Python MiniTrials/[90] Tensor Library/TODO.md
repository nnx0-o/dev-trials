# TODO: Tensor Library

Write a Python script implementing a multi-dimensional tensor library with automatic differentiation.

## Requirements
- `Tensor` class storing data as nested Python lists with arbitrary shape
- Operations: reshape, transpose, element-wise add/sub/mul/div, matmul, sum/mean along axes, broadcasting, slice, concatenate
- Implement forward-mode automatic differentiation using a computation graph
- Each `Tensor` stores a `grad_fn` (a closure that computes the gradient of the output w.r.t. this tensor's inputs)
- Implement `backward()` that traverses the graph and accumulates gradients
- Implement gradient descent optimizer using computed gradients
- Demonstrate: train a linear regression model and a 2-layer neural network on synthetic data
- Verify gradients numerically (finite differences) against the autodiff gradients
