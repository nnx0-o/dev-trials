# TODO: Sudoku Solver

Write a Python script that solves any valid 9×9 Sudoku puzzle using backtracking.

## Requirements
- Accept the puzzle as input: 9 lines of 9 digits, where `0` represents an empty cell
- Validate the initial puzzle for consistency (no duplicate numbers in rows, columns, or 3×3 boxes)
- Implement a recursive backtracking solver
- Print the unsolved puzzle, then the solved puzzle in a nicely formatted grid with box borders
- Count and display the number of recursive calls made during solving
- If the puzzle is unsolvable, print `No solution exists.`
- Also accept the puzzle as a flat 81-character string
