# TODO: Microkernel Architecture

Write a Python script implementing a microkernel with user-space services.

## Requirements
- Implement a minimal kernel: IPC message passing (synchronous send/receive), process scheduling (round-robin), and memory protection (each process gets a private dict as its address space)
- Processes are Python `Thread`s communicating only via kernel message queues
- Implement user-space servers: `VFS` (virtual filesystem), `DeviceManager`, `NetworkService` (simulated), `ProcessManager`
- Each user-space request goes through a kernel `send(dest_pid, message)` / `receive()` cycle
- Boot sequence: kernel spawns init process, which spawns service processes
- Demonstrate: a user process reading a file by going through VFS server, which uses DeviceManager
- Crash isolation: if a service crashes, the kernel restarts it without affecting other processes
