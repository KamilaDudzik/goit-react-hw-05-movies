import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import { Home } from "Pages/Home/Home";
import { Movies } from "Pages/Movies/Movies";
import { MovieInfo } from "Pages/MoviesInfo/MoviesInfo";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieInfo />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </>
  )
}