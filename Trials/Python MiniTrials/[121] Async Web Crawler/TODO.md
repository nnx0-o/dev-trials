# TODO: Async Web Crawler

Write a Python script implementing an asynchronous web crawler.

## Requirements
- Use `asyncio` with `urllib` wrapped in `asyncio.get_event_loop().run_in_executor()` for HTTP
- Start from a seed URL and crawl breadth-first up to a configurable depth (default 3)
- Use a bounded semaphore to limit concurrent requests (default 10)
- Robots.txt respect: fetch and parse `robots.txt` for each domain; skip disallowed paths
- Deduplication: track visited URLs (normalize: strip fragments, sort query params)
- Extract: page title, all internal links, all external links, word count, HTTP status, response time
- Detect broken links (404, timeouts) and report them
- Store results in a SQLite database
- Print a site map tree and a crawl statistics summary
