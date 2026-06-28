# TODO: Genetic Algorithm

Write a Python script implementing a genetic algorithm to solve an optimization problem.

## Requirements
- Solve the Traveling Salesman Problem (TSP) for a set of 20 random 2D cities
- Represent individuals as permutation chromosomes (city orderings)
- Implement: random population initialization, fitness function (total route distance), tournament selection, order-crossover (OX) operator, swap mutation, and elitism (keep top 2 individuals)
- Parameters (configurable): population size (default 100), generations (default 500), mutation rate (default 0.02), tournament size (default 5)
- Print progress every 50 generations: `Gen <n>: Best distance = <d>`
- At the end, display the best route found and plot the convergence curve as ASCII
