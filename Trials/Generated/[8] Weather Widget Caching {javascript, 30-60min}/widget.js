const cache = {};

async function getWeather(city) {
  if (cache[city]) {
    return cache[city];
  }
  const res = await fetch('https://example.invalid/weather?city=' + encodeURIComponent(city));
  const data = await res.json();
  cache[city] = data;
  return data;
}

export async function renderWeather(city, root) {
  root.innerHTML = '<p>loading...</p>';
  try {
    const data = await getWeather(city);
    root.innerHTML = '<h3>' + city + '</h3><p>' + data.temp + 'C</p>';
  } catch (err) {
    // bug: spinner text can persist elsewhere because this path is too narrow
    root.innerHTML = '<p>failed</p>';
  }
}
