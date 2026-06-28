# TODO: Student Grade Manager

Write a Python script for managing student grades with statistics and GPA calculations.

## Requirements
- Store students in a JSON file, each with a name and a dict of subject → list of grades
- Menu: `1. Add student`, `2. Add grade`, `3. View student report`, `4. Class statistics`, `5. Export to CSV`, `6. Exit`
- Student report: show all subjects, average per subject, overall average, letter grade (A/B/C/D/F), and GPA (4.0 scale)
- Class statistics: mean, median, highest, and lowest average across all students per subject
- Export: write all student data to `grades_export.csv`
- Letter grade thresholds: A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, F < 60
