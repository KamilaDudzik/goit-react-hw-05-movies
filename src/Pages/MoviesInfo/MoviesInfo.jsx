import React from "react";
import { useState, useEffect } from "react";
import { useParams, Outlet, Link, useNavigate } from "react-router-dom";
import { getMovieInfo } from "services/api";
import { Wrapper, Paragraph, Button, MovieImage } from "./MoviesInfo.styled";

const MovieInfo = () => {

    const { movieId } = useParams()
    const [movieInfo, setMovieInfo] = useState({})
    const [genres, setGenres] = useState([])
    let nav = useNavigate()

    useEffect(() => {

        const asyncFunc = async () => {
            try {
                const movieInfo = await getMovieInfo(movieId)
                setMovieInfo(movieInfo)
                setGenres(movieInfo.genres)

            } catch (error) {
                console.log(error)
            }
        }
        asyncFunc()
    }, [movieId])

    return (
        <>
            <Button onClick={() => nav(-1)}>Go back</Button>
            {movieInfo && (
                <>
                    <Wrapper>
                        <MovieImage>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movieInfo?.poster_path}`}
                                alt={movieInfo?.title}
                                width={250}
                            />
                        </MovieImage>
                        <div>
                            <h2>{movieInfo?.title}</h2>
                            <div>User score: {movieInfo?.vote_average}</div>
                            <h3>Overview</h3>
                            <p>{movieInfo?.overview}</p>
                            <h4>Genres</h4>
                            {genres.map(genre => (
                                <p key={genre.id}>{genre.name}</p>
                            ))}
                        </div>
                    </Wrapper>

                    <Paragraph>Additional information</Paragraph>
                    <ul>
                        <li>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                    <Outlet />
                </>
            )}
        </>
    )
}
export default MovieInfo;