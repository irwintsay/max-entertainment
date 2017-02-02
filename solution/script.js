document.addEventListener('DOMContentLoaded', () => {
  // Confirm script.js link
  console.log('script.js linked');

  // HTML elements
  const searchField = document.querySelector('input[name="search-field"]');
  const searchForm = document.querySelector('.search-form');
  const searchResult = document.querySelector('.search-result');
  const currentlyPlaying = document.querySelector('.currently-playing');

  // Handlebars template
  const searchSource = document.querySelector('#search-template').innerHTML;
  const searchTemplate = Handlebars.compile(searchSource);
  const currentSource = document.querySelector('#current-template').innerHTML;
  const currentTemplate = Handlebars.compile(currentSource);

  // AJAX to OMDb API
  const fetchData = (query) => {
    fetch(`https://www.omdbapi.com/?t=${query}`)
    .then(r => r.json())
    .then(response => {
      console.log(response);
      handleResponse(response);
    });
  };

  // Handle response data
  const handleResponse = (movie) => {
    const resultHTML = searchTemplate(movie);
    searchResult.innerHTML = resultHTML;
    document.querySelector('.save-movie').addEventListener('click', saveMovie);
  };

  const saveMovie = () => {
    document.querySelector('.save-movie').removeEventListener('click', saveMovie);
    const result = {
      title: document.querySelector('.result-title').innerHTML,
      image: document.querySelector('.result-img').getAttribute('src')
    };
    console.log(result);
    const movieHTML = currentTemplate(result);
    const movieNode = document.createElement('div');
    movieNode.innerHTML = movieHTML;
    currentlyPlaying.appendChild(movieNode);
  };

  // Search event handler
  searchForm.addEventListener('submit', (event) => {
    // Prevent default <form> behavior
    event.preventDefault();
    // Search field value
    fetchData(searchField.value);
  });
});