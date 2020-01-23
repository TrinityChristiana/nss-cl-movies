const getMovies = () => {
    const movieURL = "http://localhost:8088/movies";

    fetch(movieURL)
        .then(response => response.json())
        .then(movies => renderMovies(movies));
};