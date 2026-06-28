# TODO: Password Generator

Write a Python script that generates strong random passwords based on user preferences.

## Requirements
- Ask the user for: desired password length (minimum 8), whether to include uppercase letters, lowercase letters, digits, and special characters (each yes/no)
- Ensure at least one character type is selected; otherwise print an error
- Guarantee at least one character from each selected type is included
- Shuffle the result using `random.shuffle()`
- Generate and display 5 different passwords at once
- Also display a password strength indicator: `Weak`, `Medium`, `Strong`, or `Very Strong` based on length and character variety
