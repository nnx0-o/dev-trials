# TODO: Version Control System (Mini Git)

Write a Python script implementing a minimal version control system similar to Git.

## Requirements
- Store repository data in a `.minigit/` directory
- Commands: `init`, `add <file>`, `status`, `commit -m <message>`, `log`, `diff <commit1> <commit2>`, `checkout <commit_hash>`, `branch <name>`, `switch <branch>`
- `init`: create `.minigit/objects/`, `.minigit/refs/`, `.minigit/HEAD`
- `add`: hash file content with SHA-1 and store as a blob object
- `commit`: create a tree object (snapshot of added files), then a commit object with parent, author, timestamp, message
- `log`: print commit history from HEAD
- `diff`: show line-by-line differences between two commit snapshots
- `status`: show staged, modified, and untracked files
