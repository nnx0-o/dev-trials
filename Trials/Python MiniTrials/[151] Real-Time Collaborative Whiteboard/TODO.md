# TODO: Real-Time Collaborative Whiteboard

Write a Python script implementing a real-time collaborative drawing application.

## Requirements
- Server (`server.py`): WebSocket server using raw TCP + HTTP upgrade handshake (RFC 6455, implement the handshake and framing protocol from scratch); broadcast drawing operations to all connected clients
- Client (`client.py`): connect to the server; render a `curses` canvas; capture keyboard/mouse events (arrow keys to move cursor, space to draw, color keys)
- Drawing operations: `draw(x, y, color, char)`, `erase(x, y)`, `clear_all`, `draw_line(x1,y1,x2,y2)` (Bresenham's algorithm)
- Operations are CRDTs: last-writer-wins per cell, identified by (x, y) coordinate
- On connect, the server sends the full current canvas state
- Support up to 10 concurrent users; show a user count in the status bar
- Persist the canvas to a JSON file every 5 seconds
