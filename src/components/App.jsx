import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "Pages/Home/Home";
import { Nav, Link } from "./App.styled";
// import { Movies } from "Pages/Movies/Movies";
// import { MovieInfo } from "Pages/MoviesInfo/MoviesInfo";
// import { Cast } from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";

const Movies = lazy(() => import('Pages/Movies/Movies'));
const MovieInfo = lazy(() => import('Pages/MoviesInfo/MoviesInfo'));
const Cast = lazy(() => import('Components/Cast/Cast'));
const Reviews = lazy(() => import('Components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieInfo />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
        </Routes>
      </Suspense>
    </>
  )
}
