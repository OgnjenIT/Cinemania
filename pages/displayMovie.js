const display = (movies, element) => {
    element.innerHTML = movies.map(movie => {
        const { title, year, runtime, poster } = movie;

        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 movie-card card">
        <img src="${poster}" class="card-img-top" alt="Movie Image">
        <button class="play-button"><i class="bi bi-play-fill"></i></button>
        <div class="card-body d-flex flex-column">
            <h5 class="title">${title}</h5>
            <div class="d-flex align-items-center mb-2">
                <span class="me-2">${runtime} <i class="bi bi-dash"></i></span> 
                <span class="me-2">Action <i class="bi bi-dash"></i></span> 
                <span class="me-2">${year}</span> 
                <span class="ms-auto">⭐ 5.0</span>
            </div>
            <h6 class="mt-auto mb-auto">Story Line</h6>
            <p class="description">Lorem ipsum dolor sit amet consectetur. Facilisis lorem consectetur in et ac. Accumsan eu etiam at incidunt. Nisi fusce orci quis in hendrerit ultrices egestas mi. Sed dui aliquet nascetur tellus tellus magna.</p>
            <button class="btn btn-reserve mt-auto">Get Reservation</button>
        </div>
    </div>
        `;
    }).join('');
};

export default display;
