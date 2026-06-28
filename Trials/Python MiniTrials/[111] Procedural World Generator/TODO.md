# TODO: Procedural World Generator

Write a Python script that procedurally generates a 2D game world and renders it as ASCII art.

## Requirements
- Implement Perlin noise (or simplex noise) from scratch
- Generate a heightmap using layered octaves of noise
- Map height values to biomes: deep water, water, sand, grass, forest, mountain, snow
- Render the world as a colored ASCII map using ANSI color codes (one character per tile)
- Generate rivers by tracing paths from mountain peaks to water
- Place cities at flat, non-water regions using a Poisson disk sampling algorithm
- Generate a political map: assign cities to regions using Voronoi diagrams
- Support map sizes up to 200×80; seed parameter for reproducible generation
- Export the map to an HTML file with colored `<span>` characters
