# TODO: Operating System Bootloader Simulation

Write a Python script simulating the x86 boot process.

## Requirements
- Simulate the BIOS: POST (power-on self-test), memory detection, drive enumeration
- Simulate a 512-byte MBR (Master Boot Record) bootloader: parse the partition table (4 entries × 16 bytes), validate the boot signature (0x55AA), load the first bootable partition
- Simulate a stage-2 bootloader: switch from 16-bit real mode to 32-bit protected mode (simulated), set up the GDT (Global Descriptor Table)
- Load a flat kernel binary into simulated memory and jump to its entry point
- The simulated kernel: print a boot message, print a memory map, initialize a virtual device table, launch a shell that accepts `ls`, `mem`, `halt`
- Visualize memory layout at each stage
