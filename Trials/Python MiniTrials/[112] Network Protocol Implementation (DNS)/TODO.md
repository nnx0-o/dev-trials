# TODO: Network Protocol Implementation (DNS)

Write a Python script implementing a DNS client and a caching DNS resolver.

## Requirements
- Implement the DNS wire format parser: parse DNS messages (header, question, answer, authority, additional sections)
- Implement DNS record types: A, AAAA, CNAME, MX, NS, TXT
- Implement a `resolve(name, record_type)` function that sends a UDP query to `8.8.8.8:53` and parses the response
- Implement recursive resolution: if given a referral (NS records), follow it
- Implement a cache with TTL-based expiry
- Implement a simple forwarding DNS server: listen on `localhost:5353` (UDP), forward to upstream if not cached, store results in cache
- CLI: `python dns.py resolve <name> <type>` and `python dns.py server`
- Show the full resolution chain (like `+trace` in `dig`)
