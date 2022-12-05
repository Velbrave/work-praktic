import NewApiService from './markupApi/fetch';
import { countryСardTeemplate } from './markupApi/marcup';
import LoadMoreBtn from './markupApi/isHidenBtn';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.search-form'),
  cardEl: document.querySelector('.gallery'),
  //loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const newApiService = new NewApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.formEl.addEventListener('submit', onSubmit);
//refs.loadMoreBtn.addEventListener('click', onLoadMore)
loadMoreBtn.refs.button.addEventListener('click', fetchPikchers);

function onSubmit(e) {
  e.preventDefault();
  clearMarkup();
  newApiService.queryFetch = e.target.elements.searchQuery.value;
  const inputValue = newApiService.queryFetch;
  if (inputValue === '') {
    return Notiflix.Notify.failure('Qui timide rogat docet negare');
  } else {
    Notiflix.Notify.success('Sol lucet omnibus');
    loadMoreBtn.show();
    fetchPikchers();
    newApiService.resetPage();
  }
}

function fetchPikchers() {
  loadMoreBtn.disable();
  newApiService.fetchPikchers().then(picture => {
    markupPikchers(picture);
    lightbox.refresh();
    loadMoreBtn.enable();
  });
}

function markupPikchers(hits) {
  const markup = hits.map(item => countryСardTeemplate(item)).join('');
  refs.cardEl.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.cardEl.innerHTML = '';
}

// function onSubmit(e) {
//   e.preventDefault();
//   clearMarkup();
//   newApiService.queryFetch = e.target.elements.searchQuery.value;
//     if (newApiService.queryFetch === '') {
//       return alert("Sorry, there are no images matching your search query. Please try again.")
//     }
//   loadMoreBtn.show()
//   newApiService.resetPage();
//   fetchPikchers();
// }

// function onLoadMore() {
//   newApiService.fetchPikchers().then(markupPikchers);
// }
