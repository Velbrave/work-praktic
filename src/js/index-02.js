import { fetchCountries } from './fetchAPI/userAPI';
import { renderUser, renderBigUser } from "./fetchAPI/renders";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.js-form'),
  markupEl: document.querySelector('.js-markup'),
  btnEl: document.querySelector('.js-btn'),
};

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const searchForm = form.elements.query.value;

  fetchCountries(searchForm)
    .then(renderMark)
    .catch(onError)
    .finally(() => form.reset());
}


function renderMark(countries) {
  if (countries.length > 10) {
    Notify.info("Too many matches found. Please enter a more specific name.");
    return;
  }
  if (countries.length === 1) {
    const markup = countries.map(country => renderUser(country))
    refs.markupEl.insertAdjacentHTML('beforeend', markup);
  }
  if (countries.length > 2 && countries.length < 10) {
      const markup = countries.map(country => renderBigUser(country))
    refs.markupEl.insertAdjacentHTML('beforeend', markup);
  }
  if (!countries.ok) {
    throw new Error('Error')
  }
}

function onError(error) {
  Notify.failure("Oops, there is no country with that name");
  return error;
}