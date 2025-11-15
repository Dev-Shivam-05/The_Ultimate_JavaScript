/*
 Movie Api Code
*/

const url = "https://api.themoviedb.org/3/movie/changes?page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGY2YzQ5N2I2YTM2YWFlNmZhMWM2YWNmZTljNGRmZiIsIm5iZiI6MTc2MzA5OTk4MC43Miwic3ViIjoiNjkxNmM1NGM0ZWY3MmI2MTJlMzFjYThiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.abP3AUo9L6wggDYe8JgN3Q2Ff1OF92peGFHhW691svc",
  },
};

let movieList = [];
const base_url_img = "https://image.tmdb.org/t/p/w500/";

fetch(url, options)
  .then((res) => res.json())
  .then((json) => { console.log(json.results); movieList = json.results; handleMovieList(movieList);})
  .catch((err) => console.error(err));


const handleMovieList = (data) => {
  data.forEach((movie) => {
    console.log(movie);
    
  });
}
/* 
function createMovieCard(movie, index) {
  const stars = generateStars(movie.rating);
  const genres = movie.genre
    .map((g) => `<span class="movie-genre">${g}</span>`)
    .join("");

  return `
                <div class="${getResponsiveColClass()} mb-4 scroll-animate" style="animation-delay: ${
    index * 0.1
  }s">
                    <div class="movie-card" onclick="handleCardClick(event, ${
                      movie.id
                    })">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src="${movie.poster}" alt="${
    movie.title
  }" class="movie-poster">
                                <div class="movie-info">
                                    <h3 class="movie-title">${movie.title}</h3>
                                    <p class="movie-year">${movie.year}</p>
                                    <div class="movie-rating">${stars}</div>
                                    <div>${genres}</div>
                                    <p class="movie-tagline">"${
                                      movie.tagline
                                    }"</p>
                                </div>
                            </div>
                            <div class="card-back">
                                <h4 class="mb-3" style="color: var(--accent-gold);">${
                                  movie.title
                                }</h4>
                                <p><strong>Director:</strong> ${
                                  movie.director
                                }</p>
                                <p><strong>Year:</strong> ${movie.year}</p>
                                <p><strong>Rating:</strong> ${
                                  movie.rating
                                }/5</p>
                                <p class="mt-3">${movie.synopsis.substring(
                                  0,
                                  150
                                )}...</p>
                                <button class="btn btn-sm mt-3" style="background: var(--accent-neon); color: var(--primary-dark);" onclick="showMovieDetails(${
                                  movie.id
                                })">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}
*/