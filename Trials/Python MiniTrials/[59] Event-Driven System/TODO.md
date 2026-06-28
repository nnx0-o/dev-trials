# TODO: Event-Driven System

Write a Python module implementing a publish-subscribe (pubsub) event system.

## Requirements
- Implement an `EventBus` class with methods: `subscribe(event_name, handler)`, `unsubscribe(event_name, handler)`, `publish(event_name, *args, **kwargs)`, `publish_async(event_name, *args, **kwargs)` (non-blocking)
- Support wildcard subscriptions: `*` matches all events, `user.*` matches `user.login`, `user.logout`, etc.
- Support once-only subscriptions with `subscribe_once(event_name, handler)`
- `publish_async` uses `threading.Thread` to dispatch handlers concurrently
- Implement event history: store the last N events per topic (configurable)
- Build a demo: a simulated e-commerce system where `order.placed` triggers inventory update, email notification, and analytics logging
