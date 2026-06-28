# TODO: Quiz Game with Score Tracking

Write a Python script implementing a multi-category quiz game with persistent high scores.

## Requirements
- Define at least 30 questions across 3 categories (e.g., Science, History, Pop Culture), each with 4 multiple-choice options and a correct answer index
- Store questions in a structured data format (list of dicts)
- Before starting, ask for the player's name and preferred category (or `All`)
- Show questions one by one; accept `a`–`d` as input
- Track score; show `Correct!` or `Wrong! The answer was: <answer>` after each question
- At the end, show final score and save to `high_scores.json` with player name, category, score, and date
- Show all-time top 10 high scores
