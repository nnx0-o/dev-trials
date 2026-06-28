# TODO: URL Shortener (Local)

Write a Python script implementing a local URL shortener stored in a JSON file.

## Requirements
- Generate a 6-character alphanumeric short code for each URL using `random`
- Menu: `1. Shorten URL`, `2. Expand short code`, `3. List all`, `4. Delete`, `5. Usage stats`, `6. Exit`
- Shorten: validate the URL starts with `http://` or `https://`; check for duplicates before creating a new code
- Expand: look up and print the original URL or `Short code not found.`
- Usage stats: track and display how many times each short code has been looked up
- Persist all data to `urls.json`
