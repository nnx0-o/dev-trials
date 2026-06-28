# TODO: Reversible Debugger

Write a Python script implementing a reversible (time-travel) debugger for the bytecode VM from task [84].

## Requirements
- Extend the VM to record a snapshot of its complete state (stack, variables, IP) after every instruction
- Store snapshots in a ring buffer of configurable size (default 1000 steps)
- Implement debugger commands: `step` (forward), `back` (backward), `continue` (run to breakpoint), `break <line>`, `watch <variable>` (stop when variable changes), `print <expr>`, `stack` (display stack), `quit`
- Implement a REPL loop that alternates between accepting debugger commands and executing VM instructions
- When going backward, restore the exact VM state from the snapshot
- Show source code with the current line highlighted
- Implement checkpoint/restore: `checkpoint`, `restore <n>` to jump to a named point
