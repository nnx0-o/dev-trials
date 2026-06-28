# TODO: Neuromorphic Computing Simulator

Write a Python script simulating a spiking neural network (SNN) for neuromorphic computing.

## Requirements
- Implement the **Leaky Integrate-and-Fire (LIF)** neuron model: `dV/dt = -(V - V_rest)/tau + I/C`; fire when V > V_threshold, then reset to V_reset
- Implement **exponential synapses**: pre-synaptic spikes cause post-synaptic current injection that decays exponentially
- Implement **STDP** (Spike-Timing-Dependent Plasticity): `Δw = A_+ exp(-Δt/τ_+)` if pre before post; `Δw = -A_- exp(Δt/τ_-)` otherwise
- Simulate time in discrete steps (dt = 0.1 ms)
- Implement a **spiking raster plot**: ASCII heatmap of spike times per neuron
- Encode inputs as spike trains using rate coding
- Demonstrate: winner-take-all network (N=10 neurons, one wins for each input), and pattern recognition via STDP learning
