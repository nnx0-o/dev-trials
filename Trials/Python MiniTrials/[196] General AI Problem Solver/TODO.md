# TODO: General AI Problem Solver

Write a Python script implementing a general AI problem-solving framework.

## Requirements
- Implement a **general problem space**: problems are described as initial state, goal test, action space, and cost function
- Implement a library of search algorithms: A*, IDA*, RBFS, SMA*, LRTA* (learning real-time A*), MCTS (Monte Carlo Tree Search)
- Implement **meta-reasoning**: the solver selects the best algorithm for each problem by predicting performance from problem features (branching factor estimate, heuristic quality estimate, memory constraints)
- Implement a **heuristic learner**: given solved examples, learn an additive heuristic using linear regression
- Demonstrate on: 15-puzzle (A*), Sokoban (MCTS), TSP (IDA* + learned heuristic), robot path planning (LRTA*), game-tree search for Reversi (MCTS)
- Output: solution path, nodes expanded, time, and a comparison of algorithms on each problem
