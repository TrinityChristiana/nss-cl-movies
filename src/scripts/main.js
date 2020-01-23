getMovies();

const searchBox = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn");

searchBox.addEventListener("keyup", (e) => e.keyCode === 13 ? searchMovies(searchBox.value) : null);

searchBtn.addEventListener("click", () => searchMovies(searchBox.value));
