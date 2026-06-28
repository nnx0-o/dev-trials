# TODO: Regex Text Processor

Write a Python script that applies regular expression operations to a text file.

## Requirements
- Ask the user for a file path (plain text)
- Load and display the first 10 lines as a preview
- Menu: `1. Find all matches`, `2. Count matches`, `3. Replace pattern`, `4. Extract emails`, `5. Extract URLs`, `6. Exit`
- Options 1–3: prompt for a regex pattern; option 3 also prompts for a replacement string
- Show results clearly (matched text, count, or modified text)
- Option 3: ask whether to save the modified text to a new file
- Use `re` module throughout; handle invalid regex with a descriptive error message
