# TODO: Pomodoro Timer

Write a Python script implementing a Pomodoro productivity timer.

## Requirements
- Default values: 25 minutes work, 5 minutes short break, 15 minutes long break, long break after every 4 pomodoros
- Allow the user to customize these values at startup
- Use `time.sleep(1)` and update a countdown display on the same line
- Sound an alert using `\a` (bell character) when a phase ends
- Track and display completed pomodoros in the session
- Print a clear phase header when each new phase begins: `--- Work Session 1 ---`, `--- Short Break ---`, etc.
- Allow the user to skip the current phase by pressing Enter (use threading or non-blocking input)
