# TODO: Custom Shell

Write a Python script implementing a minimal Unix-like command shell.

## Requirements
- Show a prompt with the current working directory: `[~/path] $ `
- Support built-in commands: `cd <dir>`, `pwd`, `ls [-l] [-a]`, `mkdir <dir>`, `rm <file>`, `cat <file>`, `echo <text>`, `history`, `clear`, `exit`
- Support piping between commands using `|`, e.g., `cat file.txt | echo`
- Support output redirection `>` and append `>>`
- Execute external commands using `subprocess` if not a built-in
- Maintain a command history (accessible via up/down arrow keys if using `readline`)
- Handle `Ctrl+C` gracefully (print a new prompt line instead of exiting)
