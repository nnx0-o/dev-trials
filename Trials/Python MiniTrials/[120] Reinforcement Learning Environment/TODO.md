# TODO: Reinforcement Learning Environment

Write a Python script implementing a reinforcement learning environment and agent.

## Requirements
- Implement a `GridWorld` environment: NxN grid, agent start, goal, walls, and pit traps; gym-like API: `reset()`, `step(action)` → (observation, reward, done, info)
- Implement Q-learning: maintain a Q-table (state × action), update with Bellman equation, epsilon-greedy exploration
- Implement Deep Q-Network (DQN) using the neural network from task [71]: experience replay buffer, target network (updated every K steps)
- Train both agents on GridWorld and compare convergence speed
- Plot learning curves as ASCII line graphs (episode reward vs episodes)
- Implement a second environment: CartPole physics simulation (use Euler integration for the inverted pendulum ODE)
- Save and load trained Q-tables and neural network weights
