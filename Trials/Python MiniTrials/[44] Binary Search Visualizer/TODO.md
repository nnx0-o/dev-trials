# TODO: Binary Search Visualizer

Write a Python script that visually demonstrates binary search on a sorted list.

## Requirements
- Ask the user for a list size (10–50) and generate a sorted list of unique random integers in that range
- Ask the user for a target value to search for
- Step through binary search, printing the current state after each step:
  - Show the full list with brackets indicating the current search range
  - Mark the midpoint with an arrow (`^`)
  - Print: `Step <n>: Checking index <mid> (value <v>). Range: [<lo>, <hi>]`
- At the end, print `Found at index <i>` or `Not found.` and total steps taken
- Also implement and demonstrate linear search for comparison, showing how many steps it took
