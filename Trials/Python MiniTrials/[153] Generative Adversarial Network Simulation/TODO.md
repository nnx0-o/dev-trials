# TODO: Generative Adversarial Network Simulation

Write a Python script implementing a GAN simulation for 1D data distributions.

## Requirements
- Use the neural network from task [71] (no NumPy)
- **Generator**: takes a noise vector (z ~ Uniform[-1,1]) as input and outputs a 1D sample
- **Discriminator**: takes a 1D sample as input and outputs a probability (real vs fake)
- Training loop: alternately train D (maximize log D(x) + log(1 - D(G(z)))), then G (maximize log D(G(z)))
- Train to match a mixture of two Gaussians: p(x) = 0.5 N(-2, 0.5) + 0.5 N(2, 0.5)
- Every 100 epochs, print an ASCII histogram of 1000 generated samples vs the true distribution
- Track and plot (ASCII) generator loss and discriminator loss over training
- Demonstrate mode collapse by using a bad learning rate, then fix it
