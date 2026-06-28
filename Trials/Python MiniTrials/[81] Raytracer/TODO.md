# TODO: Raytracer

Write a Python script implementing a simple ray tracer that outputs a PPM image.

## Requirements
- Implement `Vec3` class with: add, subtract, scale, dot product, cross product, normalize, length
- Implement `Ray(origin, direction)` class
- Support scene objects: `Sphere(center, radius, material)` and `Plane(point, normal, material)`
- `Material` has: color (RGB), diffuse coefficient, specular coefficient, shininess, reflectivity
- Implement Phong shading with ambient, diffuse, and specular components
- Support multiple point lights in the scene
- Implement recursive reflections up to depth 3
- Implement shadow rays
- Output a 400×300 PPM image of a scene with at least 3 spheres and 1 plane
- Print progress percentage during rendering
