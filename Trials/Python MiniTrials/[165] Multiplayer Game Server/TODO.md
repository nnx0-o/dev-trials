# TODO: Multiplayer Game Server

Write a Python script implementing a multiplayer game server for a simple real-time game.

## Requirements
- Game: a 2D arena where players move in 4 directions, collect coins, and shoot projectiles at each other
- Server: asyncio-based; manage game state; tick at 20Hz; broadcast state to all clients
- Client: connect via TCP; send input events (direction key, fire); receive and render game state using `curses`
- Protocol: binary-encoded messages using `struct`; message types: `INPUT`, `STATE_UPDATE`, `PLAYER_JOIN`, `PLAYER_LEAVE`, `SCORE_UPDATE`
- Game logic: collision detection (AABB), projectile movement, player respawn after 3 seconds
- Anti-cheat: server-side authoritative simulation; reject impossible inputs
- Lag compensation: server stores 500ms of state history; reconcile client inputs with latency
- Leaderboard: persist scores to SQLite between sessions
