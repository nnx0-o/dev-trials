# TODO: Operating System from Scratch

Write a Python script implementing a complete simulated operating system.

## Requirements
- Combine: microkernel from task [122], scheduler from task [73], memory allocator from task [152], filesystem from task [170], hypervisor from task [155], and network stack
- **Kernel**: message-passing microkernel; user-space drivers for all hardware; capability-based security
- **Virtual memory**: 64-bit address space simulation; page tables (4-level); demand paging; swap to a simulated disk
- **Network stack**: implement TCP/IP over simulated Ethernet; ARP, IPv4, ICMP, TCP (with congestion control), UDP, DNS
- **Shell**: full Unix-like shell (pipelines, redirections, job control, signals)
- **System calls**: complete POSIX subset (at least 30 syscalls)
- Boot sequence → init → service processes → interactive login shell
- Run the web server from task [68] as a user-space process inside the simulated OS
