import React from "react";
import { useState, useEffect } from "react";
import { getTrending } from "services/api";
import { StyledLink } from "./Home.styled";

export const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrending()
            .then(trendingMovies => {
            setTrendingMovies(trendingMovies)
        })
    }, [])

    return (
        <>
            <h2>Trending today</h2>
            {trendingMovies.map(movie => {
                const { title, id } = movie;
                return (
                    <StyledLink to={`/movies/$${id}`} key={id}>
                        {title}
                    </StyledLink>
                )
            })}
        </>
    )
}

