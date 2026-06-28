# TODO: Inventory Management System

Write a Python script for managing a product inventory stored in a JSON file.

## Requirements
- Each product has: `id` (auto-incremented integer), `name`, `category`, `quantity`, `price`
- Menu: `1. Add product`, `2. View all`, `3. Search by name/category`, `4. Update quantity`, `5. Update price`, `6. Delete product`, `7. Low stock alert`, `8. Total inventory value`, `9. Exit`
- Low stock alert: list products where quantity < a threshold the user sets (default 5)
- Total value = sum of (quantity × price) for all products
- Display results in formatted tables with column headers
- Persist all changes to `inventory.json`
