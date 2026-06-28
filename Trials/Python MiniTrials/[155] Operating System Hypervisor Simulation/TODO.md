# TODO: Operating System Hypervisor Simulation

Write a Python script simulating a type-1 hypervisor managing guest virtual machines.

## Requirements
- Simulate a physical machine with: physical memory (dict), physical CPUs (threads), device list
- Each guest VM has: a virtual CPU (vCPU) with its own register file, a virtual memory map (guest physical → host physical page mapping), a virtual device set
- Implement hardware virtualization: guest code runs in a reduced-privilege mode; privileged instructions trap to the hypervisor
- Implement memory virtualization: Extended Page Tables (EPT) simulation; handle guest page faults
- Implement I/O virtualization: intercept guest I/O port accesses and emulate virtual devices (virtual disk, virtual NIC)
- Implement VM migration: pause a VM, serialize its complete state, restore on another (simulated) host
- Boot 2 guest VMs simultaneously and show both running independently
