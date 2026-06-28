# TODO: Hardware-Assisted Virtualization Simulator

Write a Python script simulating Intel VT-x hardware-assisted virtualization.

## Requirements
- Simulate the VMX operation: VMXON, VMXOFF, VMLAUNCH, VMRESUME, VMEXIT, VMREAD, VMWRITE
- Implement the VMCS (Virtual Machine Control Structure): guest state area, host state area, VM-execution control fields, VM-exit control fields, VM-entry control fields
- Simulate VM-exits for: I/O instructions (IN/OUT), CPUID, RDMSR/WRMSR, EPT violations (memory access outside mapped regions), interrupt injection
- Implement EPT (Extended Page Tables): 4-level page walk for guest physical → host physical translation
- Run a minimal 16-bit real-mode guest that prints to the (simulated) serial port via I/O instructions
- Log every VM-exit with reason, guest RIP, and handler action
- Measure VM-exit overhead (simulated cycles) per exit type
