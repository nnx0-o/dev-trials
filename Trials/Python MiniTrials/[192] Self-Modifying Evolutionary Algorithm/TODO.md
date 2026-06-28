# TODO: Self-Modifying Evolutionary Algorithm

Write a Python script implementing an evolutionary algorithm that evolves its own operators.

## Requirements
- Encode individuals as programs in the tiny language from task [56] that compute a numerical output
- The **meta-level**: evolve the crossover and mutation operators themselves (represented as code trees)
- Implement **meta-evolution**: a population of operator programs; each operator is evaluated by the quality of offspring it produces when applied to the object-level population
- Object-level fitness: solve symbolic regression (find a function that fits given data points)
- Implement **self-adaptation**: each individual carries its own mutation rate parameters, which also evolve
- Implement **novelty search**: maintain an archive of behaviorally distinct solutions; reward exploration over exploitation
- Track and visualize: fitness landscape, operator usage frequency, diversity (pairwise distance in program space)
- Compare self-modifying vs fixed operators on 5 benchmark functions
