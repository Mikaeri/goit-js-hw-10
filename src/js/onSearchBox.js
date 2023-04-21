import refs from './refs';
import {fetchCountries} from './fetchCountries'
import {listMarkup} from './listMarkup';
import { countryInfoMarkup } from './countryInfoMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function onSearchBox(evt) {
    const searchQuery = refs.searchBox.value;
    fetchCountries(searchQuery.trim())
      .then((data) => {
        refs.countriesList.innerHTML = '';

    if (data.length === 1){
      const countriesMarkup = countryInfoMarkup(data);
      refs.countriesList.insertAdjacentHTML('beforeend', countriesMarkup);
    }
    else if(data.length > 1 && data.length <= 10){
        const countriesMarkup = listMarkup(data);
        refs.countriesList.insertAdjacentHTML('beforeend', countriesMarkup);
    }
    else {
        refs.countriesList.innerHTML = '';
        Notify.warning('Too many matches found. Please enter a more specific name.');
    }
      })
      .catch((err) => {
        refs.countriesList.innerHTML = '';
        if (searchQuery.trim() ===""){
            return;
        }
      else if (err.message ==="404"){
          return Notify.failure('Oops, there is no country with that name');
        }
  })
}