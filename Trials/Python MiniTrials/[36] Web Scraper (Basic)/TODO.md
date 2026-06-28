# TODO: Web Scraper (Basic)

Write a Python script that scrapes and displays data from a public webpage.

## Requirements
- Use `urllib.request` and the built-in `html.parser` via `html.parser.HTMLParser` (no external libraries)
- Ask the user for a URL
- Fetch the page content and parse it
- Extract and display: the page title, all `<h1>` through `<h3>` headings (with their level), all hyperlinks (`<a href>`) with their display text, and the word count of all visible text
- Handle HTTP errors and malformed URLs gracefully
- Print output in clearly labeled sections
