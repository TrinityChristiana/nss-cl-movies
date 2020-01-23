//  Function that argument (list of movies) displays each item on console.log
const renderMovies = (movies) => {
    const movieContainer = document.querySelector("#movie-container");
    movieContainer.innerHTML = "";
    movies.forEach(movie => {
        movieContainer.innerHTML += movieFactory(movie);
    });
};

// function that create html for each movie array item
const movieFactory = (movie) => {
    return `
    <section class="movie">
        <h2>Title: ${movie.title}</h2>
        <h2>Date: ${movie.yearReleased}</h2>
    </section>
    `;
};