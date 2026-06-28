# TODO: CSV Data Analyzer

Write a Python script that reads a CSV file and performs analysis on its numeric columns.

## Requirements
- Ask the user for the path to a CSV file
- Use the `csv` module (no pandas) to read the file
- Detect numeric columns automatically
- For each numeric column, compute: count, sum, min, max, mean, and standard deviation
- Print a formatted table of results
- Also allow the user to filter rows by a column value and print matching rows
- Handle missing values by skipping them and reporting the count of missing entries per column
