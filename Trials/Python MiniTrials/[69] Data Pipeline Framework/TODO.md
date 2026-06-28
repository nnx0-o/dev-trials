# TODO: Data Pipeline Framework

Write a Python module implementing a composable data processing pipeline.

## Requirements
- Implement a `Pipeline` class that chains `Stage` objects
- Each `Stage` is initialized with a callable (transform function) and optional name
- `Pipeline.pipe(stage)` adds a stage; `Pipeline.run(data)` passes data through all stages sequentially
- Support branching: `Pipeline.fork(name, condition, pipeline_a, pipeline_b)` routes data based on a predicate
- Support parallel stages: `Pipeline.parallel(*stages)` runs multiple stages concurrently using threads and merges results
- Track execution time per stage and print a summary table
- Implement input/output type validation with informative errors
- Build a demo: a CSV ETL pipeline (read → filter → transform → aggregate → export)
