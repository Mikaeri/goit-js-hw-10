export function countryInfoMarkup(arr){
    return arr.map(({flags:{svg}, name:{official}, capital, population, languages}) => 
    `<div>
      <img class="country-image" src="${svg}" width="100"></іmg>
    <h2 class="country-name">${official}</h2>
  </div>
  <div>
    <p class="country-describe"><span class="text">Capital: </span>${capital}</p>
    <p class="country-describe"><span class="text">Population: </span>${population}</p>
    <p class="country-describe"><span class="text">Languages: </span>${Object.values(languages)}</p>
  </div>`);
}