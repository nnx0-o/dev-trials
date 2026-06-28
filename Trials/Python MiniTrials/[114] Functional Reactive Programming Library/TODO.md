# TODO: Functional Reactive Programming Library

Write a Python module implementing a functional reactive programming (FRP) library.

## Requirements
- Implement `Observable` class: represents a stream of values over time
- Sources: `Observable.of(*values)`, `Observable.from_iterable(it)`, `Observable.interval(seconds)`, `Observable.from_event(event_bus, event_name)`
- Operators (return new Observables): `map(fn)`, `filter(pred)`, `reduce(fn, initial)`, `take(n)`, `skip(n)`, `merge(*others)`, `zip(*others)`, `flat_map(fn)`, `throttle(seconds)`, `debounce(seconds)`, `distinct_until_changed()`
- Terminal operators: `subscribe(on_next, on_error, on_complete)`
- Use `threading` for time-based operators
- Implement `Subject`: both an Observable and an Observer (for multicasting)
- Demo: a real-time stock price simulator with filtering and moving average computation
