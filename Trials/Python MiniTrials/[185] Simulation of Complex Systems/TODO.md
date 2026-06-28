# TODO: Simulation of Complex Systems

Write a Python script implementing simulations of several complex systems.

## Requirements
- Implement **Conway's Game of Life** with periodic boundary conditions; also implement Rule 110, a Turing-complete 1D cellular automaton; render both with ANSI colors
- Implement a **2D Ising model** Monte Carlo simulation (Metropolis algorithm): compute magnetization and energy as a function of temperature; show the phase transition near T_c
- Implement a **flocking simulation** (Boids): N agents with cohesion, alignment, and separation forces; simulate on a 2D toroidal space; render as ASCII
- Implement a **reaction-diffusion system** (Gray-Scott model): two chemical species with diffusion and reaction; use a finite-difference discretization; render patterns as ASCII heatmap
- Each simulation runs for a user-specified number of steps; show a live animated terminal display using ANSI escape codes
