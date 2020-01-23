// import nnn from "./movieManager"
// import nnn from "./apiManager"

getMovies();

const searchBox = document.querySelector("#searchBox");
searchBox.addEventListener("keyup", (e) => {
    if(e.keyCode === 13){
        searchMovies(searchBox.value);
    }
});
