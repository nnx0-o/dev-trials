# TODO: Multi-threaded File Downloader

Write a Python script that downloads multiple files concurrently using threads.

## Requirements
- Accept a text file containing one URL per line as a command-line argument
- Download all files concurrently using `threading.Thread` and a queue
- Use a thread pool of configurable size (default: 4 threads)
- Display a live progress indicator: `[<filename>] <downloaded>/<total> KB (<percent>%)`
- Update the display in-place using ANSI escape codes (one line per active download)
- Track and print total time and average download speed
- Retry failed downloads up to 3 times before marking as failed
- Save files to a `downloads/` subdirectory
