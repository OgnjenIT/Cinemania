import { getElement } from "../utils/utils.js";
import display from "../pages/displayMovie.js";

const setupSearch = (movies) => {
    const nameInput = getElement("#search-movie");

    nameInput.addEventListener("keyup", () => {
        const value = nameInput.value.trim().toLowerCase();
        
        if (movies && movies.length > 0) { 
            const searchedMovies = movies.filter((movie) => {
                return movie.title && movie.title.toLowerCase().includes(value);
            });

            const container = getElement(".allMoviesApi");
            if (searchedMovies.length < 1 && value !== "") {
                container.innerHTML = `<h3 class:"container">Film pod tim nazivom trenutno nije dostupan.</h3>`;
            } else {
                display(searchedMovies, container);
            }
        } else {
            console.error("Movie data is not defined or empty.");
        }
    });
};

export default setupSearch;