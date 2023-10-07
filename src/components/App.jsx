import { Route, Routes } from "react-router-dom";
import { Home } from "Pages/Home/Home";
import { Movies } from "Pages/Movies/Movies";
import { MovieInfo } from "Pages/MoviesInfo/MoviesInfo";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

import { Nav, Link } from "./App.styled";

export const App = () => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        
      </Routes>
    </>
  )
}