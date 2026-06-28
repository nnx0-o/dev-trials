# TODO: Chat Room (Socket-based)

Write a Python multi-user chat application using sockets with a server and client script.

## Requirements
- `server.py`: listen on `localhost:9999`; use threading to handle multiple clients simultaneously; broadcast messages from one client to all others in the format `[<username>]: <message>`; log connections and disconnections
- `client.py`: connect to the server; ask for a username; use threading to receive and print messages while the user types; send messages by pressing Enter
- Server announces joins: `<username> has joined the chat.` and leaves: `<username> has left the chat.`
- `/quit` command disconnects the client gracefully
- Server prints all activity to the console with timestamps
