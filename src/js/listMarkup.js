export function listMarkup (arr){
    return arr.map(({flags:{svg}, name:{official}}) =>
        `<li class="countries-item">
        <svg class="countries-flag" width="60" height="40">
          <use href="${svg}"></use>
        </svg>
        <span class="countries-name">${official}</span>
      </li>`).join('')
}