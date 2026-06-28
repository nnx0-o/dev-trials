# TODO: Text-Based Adventure

Write a simple text-based adventure game with at least 5 rooms and multiple endings.

## Requirements
- Represent rooms as a dictionary: each room has a `description` (str), `exits` (dict mapping direction → room name), and optionally `item` (str)
- The player starts in the `entrance` room
- Each turn: print the room description, list available exits and any item present
- Commands: `go <direction>`, `pick up <item>`, `inventory`, `quit`
- Track inventory as a list
- Include at least one locked door that requires a specific item to pass
- Implement at least 2 different endings (win/lose) based on player choices
