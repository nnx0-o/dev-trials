# TODO: Fractal Generator (ASCII)

Write a Python script that renders fractals as ASCII art in the terminal.

## Requirements
- Implement the following fractals: Mandelbrot set, Julia set, and Sierpinski triangle
- For Mandelbrot and Julia: map terminal columns/rows to the complex plane; determine escape-time for each point; map escape count to ASCII density characters (e.g., ` .:-=+*#%@`)
- Accept terminal size via `os.get_terminal_size()` and fill the window
- For Julia: allow the user to specify the `c` parameter as two floats
- Allow zoom via command-line args: `--zoom <factor> --cx <x> --cy <y>`
- Sierpinski: draw using recursive subdivision to fit the terminal height
