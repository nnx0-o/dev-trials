# TODO: Terminal Spreadsheet

Write a Python script implementing a functional spreadsheet application in the terminal.

## Requirements
- Use `curses` to render a grid of rows and columns (A–Z columns, 1–99 rows)
- Navigate with arrow keys; Enter to edit a cell, Escape to cancel
- Cells can contain: plain text, numbers, or formulas starting with `=`
- Implement formula evaluation supporting: `SUM(A1:A5)`, `AVG`, `MIN`, `MAX`, `COUNT`, `IF(cond,t,f)`, cell references (`A1`), and arithmetic operators
- Detect and report circular references
- Implement `Ctrl+S` to save to CSV and `Ctrl+O` to load from CSV
- Display column/row headers; highlight the active cell
- Recalculate dependent cells automatically after any edit
