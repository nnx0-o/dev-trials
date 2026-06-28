# TODO: Static Site Generator

Write a Python script that generates a static HTML website from Markdown content files.

## Requirements
- Read source content from a `content/` directory containing `.md` files with YAML front matter (title, date, tags, layout)
- Read HTML layout templates from a `templates/` directory with `{{ content }}`, `{{ title }}`, `{{ date }}` placeholders
- Parse YAML front matter using string parsing (no PyYAML)
- Convert Markdown body to HTML (implement a subset: headings, bold, italic, links, code blocks, lists)
- Generate an `index.html` listing all posts sorted by date
- Generate individual pages in `output/<slug>.html`
- Support a tag index page at `output/tags/<tag>.html`
- Watch mode (`--watch`): detect file changes and rebuild automatically using `os.path.getmtime`
