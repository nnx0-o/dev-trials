# TODO: Self-Aware Metacognitive Agent

Write a Python script implementing a metacognitive AI agent with self-monitoring capabilities.

## Requirements
- Implement a **goal-directed agent**: the agent has a goal stack, a world model (dict of predicates), and a plan (sequence of actions)
- Implement a **STRIPS-style planner**: actions have preconditions and effects; use backward-chaining to generate a plan from current state to goal
- **Metacognition**: the agent monitors its own planning and execution: tracks plan success rate per action type, detects when the world model diverges from observations, identifies which assumptions are likely wrong
- **Self-repair**: when a plan fails, the agent diagnoses the failure (which precondition was false?), updates its world model, and replans
- **Explanation**: the agent can explain any decision: `why did you do X?` → trace the goal, subgoal, and preconditions
- Simulate the agent in a grid-world with stochastic action outcomes; compare self-monitoring vs blind replanning
