import MovieBox from "./MovieBox.js";

function Body({ movies }) {
    return (
        <div class="Body">
            {movies.map((movie, index) => (
                <div key={index}>
                    <MovieBox 
                        title={movie.title} 
                        releaseDate={movie.release_date} 
                        rating={movie.vote_average} 
                        posterPath={movie.poster_path} 
                    />
                </div>
            ))}
        </div>
    );
}

export default Body;