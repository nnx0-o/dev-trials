# TODO: Snake Game (Terminal)

Write a terminal-based Snake game using the `curses` module.

## Requirements
- Initialize a `curses` window sized to the terminal
- The snake starts with length 3 in the center, moving right
- Arrow keys control direction; disallow reversing directly (e.g., can't go left if moving right)
- Randomly place food (`*`) on the board, not on the snake
- Eating food increases the snake's length by 1 and increments the score
- Display the current score at the top
- End the game when the snake hits a wall or itself; show `Game Over! Score: <n>` and wait for a keypress
- Increase speed (decrease tick delay) every 5 points
