import fetchMovies from "./pages/fetchMovies.js";
import display from "./pages/displayMovie.js";
import { getElement } from "./utils/utils.js";
import setupSearch from "./filters/search.js";

const init = async () => {
    const movies = await fetchMovies();
    display(movies, getElement(".allMoviesApi"));
    setupSearch(movies); 
};

window.addEventListener("DOMContentLoaded", init);