export function countryInfoMarkup(arr){
    return arr.map(({flags:{svg}, name:{official}, capital, population, languages}) => `<div>
    <svg class="country-flag" width="60" height="40">
      <use href="${svg}"></use>
    </svg>
    <h2 class="country-name">${official}</h2>
  </div>
  <div>
    <p class="country-describe"><span class="text">Capital: </span>${capital}</p>
    <p class="country-describe"><span class="text">Population: </span>${population}</p>
    <p class="country-describe"><span class="text">Languages: </span>${Object.values(languages)}</p>
  </div>`);
}