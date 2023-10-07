import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/api";
import { Author } from "./Reviews.styled";

const Reviews = () => {

    const { movieId } = useParams()
    const [reviews, setReviews] = useState([])
    // const [, setError] = useState(null)

    useEffect(() => {

        const asyncFunc = async () => {
            try {
                setReviews(await getMovieReviews(movieId))
            } catch (error) {
                // setError(error)
                console.log(error)
            } 
        }
        asyncFunc()
    }, [movieId])

    return (
        <ul>
            {reviews.length === 0 ? (
                <li style={{ listStyle: "none" }}>
                    We don't have any reviews for this movie
                </li>
            ) : (
                    reviews.map(review => (
                        <li key={review.id}>
                            <Author>Author: {review.author}</Author>
                            <p>{review.content}</p>
                        </li>
                    ))
            )}
        </ul>
    )
}
export default Reviews;