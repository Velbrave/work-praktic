const BASE_URL = 'https://restcountries.com/v3.1';

export function fetchCountries(name) {
  const url = `${BASE_URL}/name/${name}`;

  return fetch(url).then(response => {
      return response.json();
    })
}

//export default { fetchCountries };