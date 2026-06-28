# TODO: Distributed Machine Learning

Write a Python script implementing distributed machine learning training.

## Requirements
- Implement **data parallelism**: split a dataset across N workers; each worker computes gradients on its shard; aggregate using **AllReduce** (ring-AllReduce algorithm)
- Implement **model parallelism**: split the neural network (from task [71]) layer-wise across workers; pipeline gradient flow between workers
- Implement **parameter server architecture**: PS holds global weights; workers pull weights, compute gradients, push updates; PS aggregates (synchronous and asynchronous modes)
- Implement **gradient compression**: top-K sparsification (send only the K largest gradient components); error feedback (accumulate compressed errors locally)
- Simulate all workers as threads with a shared memory parameter server
- Benchmark: training speed vs number of workers, scaling efficiency, accuracy vs communication budget
