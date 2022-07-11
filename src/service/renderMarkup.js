import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function renderMarkup(params) {
  if (params.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
  if (params.length === 1) {
    renderMarkupOneCountry(params[0]);
  } else renderMarkupList(params);
}

function renderMarkupList(data) {
  const markupList = data
    .map(
      item => `
        <li class = "image-wrap">
          <img width = "24" height = "24" src = "${item.flags.svg}"/>
          <p>${item.name.official}</p>
        </li>`
    )
    .join('');

  refs.listCountries.innerHTML = markupList;
}

function renderMarkupOneCountry(data) {
  console.log('1: ', data);
  const language = Object.values(data.languages).join(', ');
  const markupOneCountry = `
    <div class = "image-wrap">
      <img width = "24" height = "24" src = "${data.flags.svg}"/>
      <p>${data.name.official}</p>
    </div>
    <ul class = 'country-list'>
      <li>Capital: ${data.capital}</li>
      <li>Population: ${data.population}</li>
      <li>Languages: ${language}</li>
    </ul>`;

  refs.oneCounty.innerHTML = markupOneCountry;
}
