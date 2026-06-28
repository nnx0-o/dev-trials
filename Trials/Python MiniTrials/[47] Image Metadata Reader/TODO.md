# TODO: Image Metadata Reader

Write a Python script that reads and displays EXIF metadata from JPEG images.

## Requirements
- Accept an image file path as input (JPEG/JPG)
- Use only the standard library: read the binary file and manually parse the EXIF header (or use `struct` to decode TIFF IFD entries)
- Extract and display: camera make and model, image dimensions, date/time taken, exposure time, aperture (f-number), ISO speed, GPS coordinates (if present), and orientation
- Format GPS coordinates as decimal degrees with N/S/E/W
- If no EXIF data is found, print `No EXIF data found.`
- Also display file size and last-modified date using `os.stat()`
