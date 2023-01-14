async function getSearchMovies(query, page = 1) {
  const key = '2353e8cd5ca68dd58881b4daec8c8710';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getSearchMovies;
