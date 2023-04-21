export function listMarkup (arr){
    return arr.map(({flags:{svg}, name:{official}}) =>
        `<li class="countries-item">
        <img class="countries-image" src="${svg}" width="40"></іmg>
        <span class="countries-name">${official}</span>
      </li>`).join('')
    }