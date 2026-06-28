# TODO: Probabilistic Programming Language

Write a Python script implementing a probabilistic programming system.

## Requirements
- Implement primitive distributions: `Bernoulli(p)`, `Normal(mu, sigma)`, `Uniform(a, b)`, `Poisson(lam)`, `Categorical(probs)`
- Each distribution has `sample()` and `log_prob(x)` methods
- Implement `sample(dist)` as a traced operation that records the value and its log probability
- Implement **Rejection Sampling**: repeatedly sample and accept based on an `observe(condition)` statement
- Implement **Importance Sampling with Resampling (SIR)**: run N particles, weight by likelihood of observations, resample
- Implement **Metropolis-Hastings** MCMC: propose new values for all `sample` sites, accept/reject based on posterior ratio
- Demo: Bayesian linear regression, a coin-flip model with observed data, and a Gaussian mixture model
- Plot posterior distributions as ASCII histograms
