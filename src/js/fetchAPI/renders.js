export function renderUser({
  flags,
  name,
  capital,
  population,
  languages,
  car,
  region,
  borders,
  continents,
  timezones,
}) {
  return `
  <li class="item">
    <div>
      <img class="item-element" src="${flags.png}" alt ="${name.official}" width="100"/>
      <h2>Name: ${name.official}</h2>
    </div>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${Object.values(languages)}</p>
      <p>Continents: ${continents}</p>
      <p>Borders: ${borders}</p>
      <p>Region: ${region}</p>
      <p>Cars: ${car.side}</p>
      <p>Timezones: ${timezones}</p>
  </li>
  `;
}

export function renderBigUser({flags,name}) {
  return `
      <div>
      <img class="item-element" src="${flags.png}" alt ="${name.official}" width="100"/>
      <h2>Name: ${name.official}</h2>
    </div>
  `
}