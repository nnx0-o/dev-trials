# TODO: Neural Network from Scratch

Write a Python script implementing a feedforward neural network using only the standard library and `math`.

## Requirements
- Implement `Matrix` class with: `__add__`, `__sub__`, `__mul__` (element-wise and matrix), transpose, and element-wise apply
- Implement `NeuralNetwork` class: configurable layer sizes, sigmoid and ReLU activations, forward pass, MSE and cross-entropy loss
- Implement backpropagation with gradient descent
- Train on the XOR problem and the MNIST digit classification dataset (load from CSV)
- Print loss every 100 epochs
- Implement mini-batch gradient descent with configurable batch size
- Report final accuracy on a held-out test set
- Save and load model weights to a JSON file
