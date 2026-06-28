# TODO: Markdown to HTML Converter

Write a Python script that converts a subset of Markdown to HTML without using external libraries.

## Requirements
- Support the following Markdown features: headings (`#`, `##`, `###`), bold (`**text**`), italic (`*text*`), inline code (`` `code` ``), unordered lists (`- item`), ordered lists (`1. item`), horizontal rules (`---`), paragraphs (blank-line separated), and line breaks
- Read input from a `.md` file specified as a command-line argument
- Write the output to a file with the same name but `.html` extension
- Wrap the entire output in a minimal HTML5 boilerplate with `<html>`, `<head>`, and `<body>` tags
- Print `Converted to <output_file>` on success
