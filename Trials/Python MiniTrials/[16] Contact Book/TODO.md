# TODO: Contact Book

Write a Python script implementing an in-memory contact book with a menu interface.

## Requirements
- Present a menu: `1. Add contact`, `2. View all contacts`, `3. Search contact`, `4. Delete contact`, `5. Exit`
- Store contacts as a dictionary mapping name → phone number
- Add: prompt for name and phone, warn if name already exists
- View: print all contacts sorted alphabetically as `<name>: <phone>`, or `No contacts found.`
- Search: prompt for name, print the number or `Contact not found.`
- Delete: prompt for name, confirm deletion or print `Contact not found.`
- Loop until the user chooses 5
