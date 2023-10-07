import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchMovies } from "services/api";
import { FormStyled, Button, Input } from "./Movies.styled";

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [moviesList, setMoviesList] = useState([])
    const query = searchParams.get("query") ?? ""

    useEffect(() => {

        const asyncFunc = async () => {
            try {
                setMoviesList(await searchMovies(query))

            } catch (error) {
                console.log(error)
            }
        }
        asyncFunc()
    }, [query])

    const handlerSubmit = event => {

        event.preventDefault()
        const form = event.currentTarget
        const input = form.elements.query
        setSearchParams({ query: input.value })
        input.value = ""

    }
    return (
        <>
            <FormStyled onSubmit={handlerSubmit}>
                <Input name="query" type="text" defaultValue={query} required></Input>
                <Button type="submit">Search</Button>
            </FormStyled>

            <ul>
                {moviesList.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Movies;
