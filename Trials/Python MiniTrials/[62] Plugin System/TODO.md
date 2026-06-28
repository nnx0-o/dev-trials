# TODO: Plugin System

Write a Python application with a dynamic plugin architecture.

## Requirements
- Implement a `PluginManager` class that scans a `plugins/` directory for Python files
- Each plugin is a Python file that defines a class inheriting from a `BasePlugin` class, with required methods: `name()`, `version()`, `description()`, `execute(data)`
- `PluginManager` discovers, validates, loads, and unloads plugins at runtime without restarting
- Implement a `reload_all()` method using `importlib.reload`
- Build a demo app (e.g., a data processing pipeline) that applies loaded plugins in sequence to input data
- Support plugin dependencies (a plugin declares what other plugins must be loaded first)
- Print a plugin registry table on startup
