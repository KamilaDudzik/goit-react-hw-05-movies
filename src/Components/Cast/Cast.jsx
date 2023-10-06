import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast } from "services/api";

export const Cast = () => {

    const [cast, setCast] = useState([])
    const { id } = useParams()
    const [error, setError] = useState(null)

    useEffect(() => {

        const asyncFunc = async () => {
            try {
                setCast(await getMoviesCast(id))
            } catch {
                setError(error)
            } 
        }
        asyncFunc()
    }, [id])

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