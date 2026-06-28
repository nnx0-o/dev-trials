# TODO: Graph Neural Network

Write a Python script implementing a Graph Neural Network from scratch.

## Requirements
- Represent graphs as adjacency lists and feature matrices (using the Tensor class from task [90])
- Implement a `GraphConvLayer`: for each node, aggregate neighbor features (mean/sum/max pooling), then apply a linear transformation + activation
- Implement a `GraphSAGE` model: sample a fixed number of neighbors at each layer, aggregate, concatenate with self features, apply linear layer
- Implement a `GATLayer` (Graph Attention Network): compute attention coefficients between node pairs using a learnable attention mechanism
- Tasks: node classification on the Karate Club dataset and link prediction on a synthetic graph
- Training: mini-batch gradient descent with the autodiff from task [90]
- Report: train/val accuracy per epoch, final test accuracy
