const movieDataDiv = document.getElementById('movie-data');
const button = document.getElementById("button");
const search = document.getElementById("search");
const moviesFrontPage = document.querySelectorAll(".moviesboxes");

let inputValue = "";

search.addEventListener("input", function() {
  inputValue = search.value;

  async function searchMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7599681f5e569c88436525b169349948&language=en-US&page=1&include_adult=false&query=${inputValue}`);
    const movies = await response.json();
    const posterUrl = `https://image.tmdb.org/t/p/w500`;
  

    for (let index = 0; index < moviesFrontPage.length; index++) {

      if (movies.results[index].backdrop_path == null) {
        console.log("wrong");
        moviesFrontPage[index].innerHTML = `
        <h2>${movies.results[index].original_title}</h2>
        <img src="https://live.staticflickr.com/4137/4891474513_0954283168_b.jpg">
        <p>Rating ${movies.results[index].vote_average}</p>
        `
      } else {
        moviesFrontPage[index].innerHTML = `
        <h2>${movies.results[index].title}</h2>
        <img src=${posterUrl}${movies.results[index].poster_path}>
        <p>Rating ${movies.results[index].vote_average}</p>
        `
        console.log(movies.results);
      }




     
    }
  }
  
  searchMovies();
});



async function fetchMovies(moviesboxes) {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7599681f5e569c88436525b169349948&language=en-US&page=1');
  const movies = await response.json();
  const posterUrl = `https://image.tmdb.org/t/p/w500`;

  for (let index = 0; index < moviesboxes.length; index++) {
    moviesboxes[index].innerHTML = `
    <h2>${movies.results[index].title}</h2>
    <img src=${posterUrl}${movies.results[index].poster_path}>
    <p>Rating ${movies.results[index].vote_average}</p>
  
    `
  }
  return movies;
}

fetchMovies(document.querySelectorAll(".moviesboxes"));

// button.addEventListener('click', function(e){
//   for (let i = 0; i < 4; i++) {
//     const newDiv = document.createElement('div');
//     newDiv.classList.add("moviesboxes");
//     movieDataDiv.appendChild(newDiv);
    
//   }

//   const moviesboxes = document.querySelectorAll(".moviesboxes");

//   if (moviesboxes.length <= 20) {
//     fetchMovies(moviesboxes);
//     console.log(moviesboxes.length);
//   } else {
//     console.log(moviesboxes.length);
//   }

// })


  