const getMovies = () => {
    const movieURL = "http://localhost:8088/movies";

    fetch(movieURL)
        .then(response => response.json())
        .then(movies => renderMovies(movies));
};


//  Function that argument (list of movies) displays each item on console.log
const renderMovies = (movies) => {
    const movieContainer = document.querySelector("#movie-container")
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



getMovies();