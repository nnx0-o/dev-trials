# REQUIREMENTS

## Objective checks
- [ ] API starts with 
pm start.
- [ ] /health returns ok response.
- [ ] divide-by-zero does not return a misleading success payload.
- [ ] decimals are handled correctly for add/sub/mul/div endpoints.
- [ ] new operation endpoint exists (mod or pow).

## Open-ended checks
- [ ] route logic is less repetitive.
- [ ] error responses are consistent enough for clients.
- [ ] code still feels maintainable without a full framework rewrite.

## Ready / Not Ready
- Ready when objective checks pass and API behavior is predictably documented.
