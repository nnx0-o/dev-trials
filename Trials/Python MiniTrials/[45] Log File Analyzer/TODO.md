# TODO: Log File Analyzer

Write a Python script that parses and analyzes Apache/Nginx-style access log files.

## Requirements
- Accept a log file path as a command-line argument
- Parse each line to extract: IP address, timestamp, HTTP method, URL path, status code, and response size
- Compute and display:
  - Total number of requests
  - Unique IP count
  - Top 10 most-visited URLs
  - Request count by HTTP status code
  - Top 10 IP addresses by request count
  - Total and average response size in KB
- Filter option: `--status <code>` to show only lines with that status code
- Handle malformed lines gracefully (skip and count them)
