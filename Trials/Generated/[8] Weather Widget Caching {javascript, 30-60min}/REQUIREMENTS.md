# REQUIREMENTS

## Objective checks
- [ ] cache hit path avoids immediate refetch.
- [ ] stale value can still render while refresh runs.
- [ ] spinner clears on timeout/failure.

## Open-ended checks
- [ ] fetch/render responsibilities are less entangled.
- [ ] error states are understandable.
- [ ] code paths for cache and network are traceable.

## Ready / Not Ready
- Ready when objective checks pass and failure handling no longer leaves widget stuck.
