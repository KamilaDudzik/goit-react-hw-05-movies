import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const KEY = "3cccac4c6d632d2eb9d836b8f762fd46";

export const getTrending = async () => {

  const response = await axios.get(
    `${API_URL}/trending/movie/day`,
    {
      params: {
        api_key: KEY
      },
    }
  )
  return response.data.results;
}

export const getMovieReviews = async id => {

  const reviews = await axios.get(
    `${API_URL}/movie/${id}/reviews`,
    {
      params: {
        api_key: KEY
      },
    }
  )
  return reviews.data.results;
}

export const getMovieInfo = async id => {

  const movieDetails = await axios.get(
    `${API_URL}/movie/${id}`,
    {
      params: {
        api_key: KEY
      },
    }
  )
  return movieDetails.data;
}

export const getMoviesCast = async id => {

  const cast = await axios.get(
    `${API_URL}/movie/${id}/credits`,
    {
      params: {
        api_key: KEY,
      },
    }
  )
  return cast.data.cast;
}

export const searchMovies = async query => {

  const search = await axios.get(`${API_URL}/search/movie`, {
    params: {
      api_key: KEY,
      query: query
    },
  })
  return search.data.results;
}