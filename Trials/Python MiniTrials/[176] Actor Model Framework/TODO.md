# TODO: Actor Model Framework

Write a Python module implementing the Actor model of concurrency.

## Requirements
- `Actor` base class: has a mailbox (queue), a behavior function, and runs in its own thread
- `ActorSystem`: creates and supervises actors; routes messages; provides `spawn(ActorClass, *args)` → actor reference
- `ActorRef`: a handle to send messages to an actor without direct reference to it
- Message passing: `ref.send(msg)` puts msg in the actor's mailbox; the actor processes it asynchronously
- Implement **supervision hierarchies**: each actor has a supervisor; on actor crash, apply a strategy: `RESTART`, `STOP`, or `ESCALATE`
- Implement `ask(ref, msg, timeout)`: send a message and wait for a reply
- Implement `Router` actors: round-robin, random, and smallest-mailbox routing
- Demo: Erlang-style fault-tolerant ping-pong; a pipeline of 5 transform actors; a bank account with concurrent withdrawals
