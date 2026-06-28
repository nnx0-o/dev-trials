# TODO: Expense Tracker

Write a Python script that tracks personal expenses, storing data in a JSON file.

## Requirements
- Store expenses in `expenses.json` as a list of objects with `date`, `category`, `description`, and `amount` fields
- Menu: `1. Add expense`, `2. View all expenses`, `3. View by category`, `4. Total spent`, `5. Exit`
- Add: prompt for all fields; use today's date (`datetime.date.today()`) as default if left blank
- View all: print a formatted table with all expenses sorted by date
- View by category: list unique categories, let user pick one, show matching expenses
- Total: show grand total and per-category breakdown
- Save to file after every addition
