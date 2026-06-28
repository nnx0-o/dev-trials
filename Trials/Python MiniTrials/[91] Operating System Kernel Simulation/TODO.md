# TODO: Operating System Kernel Simulation

Write a Python script simulating core operating system kernel subsystems.

## Requirements
- Simulate a virtual CPU with 4 registers (R0–R3), a program counter, stack pointer, and status flags
- Implement a process table: each process has PID, state (READY/RUNNING/BLOCKED/ZOMBIE), PCB (saved registers, PC, stack)
- Simulate preemptive multitasking: time slice = 10 ticks, context switch via PCB save/restore
- Implement system calls: `fork()`, `exec(program)`, `exit(code)`, `wait(pid)`, `sleep(ticks)`, `read(fd)`, `write(fd, data)`
- Simulate a simple file system: in-memory inode table, file descriptor table per process
- Implement a pipe mechanism for inter-process communication
- Print a system log: all context switches, system calls, and process state changes
- Run a demo workload of 5 concurrent simulated processes
