async function getTrending() {
  const key = '2353e8cd5ca68dd58881b4daec8c8710';
  const url = 'https://api.themoviedb.org/3/trending/all/day';
  const filter = `?api_key=${key}`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getTrending;
