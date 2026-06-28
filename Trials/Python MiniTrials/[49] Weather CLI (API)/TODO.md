# TODO: Weather CLI (API)

Write a Python script that fetches and displays weather data from the Open-Meteo API (free, no key required).

## Requirements
- Ask the user for a city name
- Use the Open-Meteo geocoding API (`https://geocoding-api.open-meteo.com/v1/search`) to resolve city → lat/lon
- Fetch current weather from `https://api.open-meteo.com/v1/forecast` with parameters for temperature, wind speed, humidity, and weather code
- Map weather codes to human-readable descriptions (e.g., 0 = Clear sky, 61 = Rain)
- Display: city, country, current temperature (°C), feels-like, humidity, wind speed, and condition
- Also show a 7-day high/low forecast as an ASCII bar chart
- Use `urllib.request` only; no third-party libraries
