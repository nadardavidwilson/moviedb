import React, {useState} from "react";

export default function SearchMovies(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    
    const searchMovies =  (e) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=6b524427b260030f60ea4fe5401f101d&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results || []);
                console.log(data.results)
            })
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <div className="form">
                
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" onClick={searchMovies} type="button">Search</button>
            </div>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>

                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p><small>TOTAL NUMBER OF VOTES: {movie.vote_count}</small></p>
                        </div>

                    </div>
                    
                ))}
            </div>    
        </>
    )
}