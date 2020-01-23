//  Function that argument (list of movies) displays each item on console.log
const renderMovies = (movies, searchInput) => {
    const movieContainer = document.querySelector("#movie-container");
    movieContainer.innerHTML = "";
    const hasSearch = searchInput != undefined ? true : false;
    if (hasSearch && movies.length == 0) {
        movieContainer.innerHTML = `There are no movies with "${searchInput}" in the title`;
    } else if (hasSearch) {
        movieContainer.innerHTML += `Here are movies with "${searchInput}" in the title`;
        movies.forEach(movie => {
            movieContainer.innerHTML += movieFactory(movie);
        });
    } else {
        movies.forEach(movie => {
            movieContainer.innerHTML += movieFactory(movie);
        });
    }

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