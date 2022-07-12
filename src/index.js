import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './service/refs';
// import getRefsObject from './service/refs';
import { feachCountries } from './service/fetch';
import { renderMarkup } from './service/renderMarkup';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
// const refs = getRefsObject();
// console.log(refs);
refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  event.preventDefault();
  const countryName = refs.input.value.trim();

  refs.oneCounty.innerHTML = '';
  refs.listCountries.innerHTML = '';

  if (countryName) {
    feachCountries(countryName)
      .then(renderMarkup)
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
        console.log(countryName);
      });
  }
}
