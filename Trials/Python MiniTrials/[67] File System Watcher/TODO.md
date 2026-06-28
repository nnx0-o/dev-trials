# TODO: File System Watcher

Write a Python script that monitors a directory for file system events.

## Requirements
- Use only the standard library: poll the directory with `os.scandir()` in a loop using `time.sleep()`
- Detect: file created, file deleted, file modified (by mtime change), file renamed (created + deleted in same tick)
- Recursively watch subdirectories
- Print timestamped events: `[2024-01-15 10:23:45] CREATED: path/to/file.txt`
- Support event filtering by file extension via command-line flag: `--ext .py .json`
- Support ignore patterns via `--ignore <pattern>` using `fnmatch`
- Write events to a log file in addition to stdout
- Handle permission errors and inaccessible paths gracefully
