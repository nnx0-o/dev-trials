# TODO: Flashcard Study App

Write a Python script implementing a command-line flashcard study tool.

## Requirements
- Store decks in a JSON file: each deck has a name and a list of cards with `front` and `back` fields
- Menu: `1. Create deck`, `2. Add card to deck`, `3. Study deck`, `4. List decks`, `5. Delete deck`, `6. Exit`
- Study mode: shuffle cards, show the front, wait for Enter, reveal the back, then ask: `Correct? (y/n)`
- Track correct and incorrect counts per study session
- At the end of a session, show score: `Score: <correct>/<total> (<percent>%)`
- Allow studying only cards previously marked incorrect with option `6. Review missed cards`
