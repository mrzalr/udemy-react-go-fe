import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [movie, SetMovie] = useState({})
    const movieId = useParams()

    useEffect(() => {
        const myMovie = {
            id: 1,
            title: "Highlander",
            release_date: "1986-03-07",
            runtime: 116,
            mpaa_rating: "R",
            description: "Lorem ipsum dolor sit amet",
        }

        SetMovie(myMovie)
    }, [movieId])

    return(
        <div>
            <h2>Movie : {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</em></small>
            <p className="mt-3">{movie.description}</p>
        </div>
    )
}

export default Movie