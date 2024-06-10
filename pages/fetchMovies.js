const fetchMovies = async () => {
    try {
        const response = await fetch("./data.json");
        const { movies } = await response.json();
        return movies;
    } catch (error) {
        alert("Error fetching data");
    }
};

export default fetchMovies;
