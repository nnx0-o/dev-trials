# TODO: File Organizer

Write a Python script that organizes files in a given directory by their extension.

## Requirements
- Ask the user for the path to a directory
- Validate the path exists and is a directory
- Define a mapping of extensions to folder names, e.g., `.jpg/.png/.gif` → `Images`, `.pdf` → `PDFs`, `.py` → `Python`, `.txt/.md` → `Documents`, etc.
- Create subfolders inside the target directory as needed
- Move each file (using `shutil.move`) into the appropriate subfolder
- Files with unknown extensions go into an `Other` folder
- Skip directories and print a summary: `Moved <n> files.`
