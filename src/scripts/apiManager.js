const getMovies = () => {
    const movieURL = "http://localhost:8088/movies";

    fetch(movieURL)
        .then(response => response.json())
        .then(movies => renderMovies(movies));
};

const searchMovies = (searchInput) => {
    const movieURL = `http://localhost:8088/movies?q=${searchInput}`;
    fetch(movieURL)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(movies => renderMovies(movies, searchInput));
}