# TODO: Simple ATM

Write a Python script simulating a basic ATM machine.

## Requirements
- Start with a hardcoded PIN (`1234`) and balance (`$1000.00`)
- Ask the user to enter their PIN; allow 3 attempts before locking: `Account locked.`
- Once authenticated, show a menu: `1. Check balance`, `2. Deposit`, `3. Withdraw`, `4. Exit`
- Deposit: prompt for amount (must be positive float), add to balance
- Withdraw: prompt for amount, reject if it exceeds balance or is non-positive
- Always display amounts with 2 decimal places and a `$` prefix
- Loop until the user exits
