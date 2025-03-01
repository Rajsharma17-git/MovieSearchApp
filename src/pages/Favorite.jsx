import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const {Favorites} = useMovieContext();

    if (Favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
            <div className="movies-grid">
            {Favorites.map((movie) => (
                 
                <MovieCard movie={movie} key={movie.id} />
                
            ))}
        </div>
        </div>
    )}

    return <div className="favorites-empty">
        <h2>No Favorite Movies yet</h2>
        <p>Start adding movies to Favorites and they appear here</p>
    </div>
}

export default Favorites