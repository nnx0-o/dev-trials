# TODO: Operating System Scheduler Simulator

Write a Python script simulating CPU scheduling algorithms.

## Requirements
- Implement four algorithms: FCFS, SJF (non-preemptive), Round Robin (configurable quantum), and Priority Scheduling
- Input: a list of processes, each with PID, arrival time, burst time, and priority
- Simulate the scheduler tick by tick; produce a Gantt chart as ASCII
- Compute for each process: completion time, turnaround time, waiting time, and response time
- Print a results table with all per-process metrics and averages
- Allow loading process definitions from a CSV file
- Demonstrate all four algorithms on the same process set and display a comparison summary
