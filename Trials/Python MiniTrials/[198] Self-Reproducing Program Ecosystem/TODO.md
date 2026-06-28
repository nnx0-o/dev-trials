# TODO: Self-Reproducing Program Ecosystem

Write a Python script implementing a digital ecosystem of self-reproducing programs.

## Requirements
- Implement a virtual machine with a flat tape of instructions (like Tierra or Avida)
- Instruction set (∼32 instructions): `nop`, `push`, `pop`, `add`, `sub`, `mov`, `jmp`, `jmpz`, `call`, `ret`, `alloc` (allocate daughter cell), `copy` (copy instruction to daughter), `split` (execute daughter cell), `get_size`, `get_age`
- Implement a **soup**: a large tape (1MB) where many programs coexist; memory is allocated by cells, freed when they die
- Evolution: copy errors occur at a configurable rate (default 0.001); cells compete for memory; longer-lived cells survive longer
- Implement a **reaper queue**: kill the oldest cells when memory is full
- Implement **evolution tracking**: log genotype diversity, fitness (replication rate), and phylogeny (parent-child relationships)
- Visualize: memory usage over time, species counts, phylogenetic tree as ASCII
