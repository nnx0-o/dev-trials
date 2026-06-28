# TODO: Live Code Reloader

Write a Python module implementing a live code reloading system for long-running applications.

## Requirements
- Watch all imported module files for changes using `os.path.getmtime`
- On change detection, reload the module using `importlib.reload`, handling reload order by dependency graph (reload dependencies before dependents)
- Implement state preservation: before reload, serialize state from the old module; after reload, restore into the new module (require modules to define `__save_state__()` and `__load_state__(state)` hooks)
- Handle reload failures gracefully: if the new code has a syntax error, keep running the old version and log the error
- Support `@hot_function` decorator: wraps a function so calls are always dispatched to the latest version
- Build a demo: a web server (from task [68]) that reloads route handlers without dropping connections
- Show before/after reload latency and verify zero request loss during reload
