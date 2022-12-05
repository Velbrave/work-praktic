export default class NewApiService{
  constructor() {
    this.query = '';
    this.page = 1;
}
fetchPikchers() {
  const url = 'https://pixabay.com/api/';
  const key = '31801380-6d92922f2c4e09c36cd0b60c6';
  const filter = `&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
  return fetch(`${url}?key=${key}&q=${this.query}${filter}`)
    .then(response => response.json())
    .then(data => {
      this.page += 1;
      return data.hits
    });
}

  get queryFetch() {
    return this.query;
  }
  
  set queryFetch(newQuery) {
    this.query = newQuery;
  }
  
  resetPage() {
    this.page = 1;
  }
}