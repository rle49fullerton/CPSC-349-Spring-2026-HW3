function MovieBox({ title, releaseDate, rating, posterPath }) {
    let baseUrl = 'https://image.tmdb.org/t/p/w342';

    return (
        <div>
            <img src={baseUrl + posterPath} alt={title} />
            <h2>{title}</h2>
            <p>Release Date: {releaseDate}</p>
            <p>Rating: {rating}</p>
        </div>
    );
}

export default MovieBox;
