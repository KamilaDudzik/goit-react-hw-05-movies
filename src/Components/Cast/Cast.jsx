import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast } from "services/api";

const Cast = () => {

    const [cast, setCast] = useState([])
    const { movieId } = useParams()
    // const [error, setError] = useState(null)

    useEffect(() => {

        const asyncFunc = async () => {
            try {
                setCast(await getMoviesCast(movieId))
            } catch (error) {
              // setError(error)
              console.log(error)
            } 
        }
        asyncFunc()
    }, [movieId])

  return (
    <ul>
      {cast.map(castMember => (
          <li key={castMember.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
              width={200}
              alt={castMember.name}
            />
            <p>{castMember.name}</p>
            <p>Character: {castMember.character}</p>
          </li>
        )
      )}
    </ul>
  )
}

export default Cast;