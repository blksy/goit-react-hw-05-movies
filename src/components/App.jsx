import { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Layout } from "./Layout/Layout.jsx";
import { Loader } from "./loader/Loader.jsx";

const HomePage = lazy(() =>
  import("pages/HomePage/HomePage.jsx"),
);

const MoviesPage = lazy(() =>
  import("pages/MoviesPage/MoviesPage.jsx"),
);

const MovieDetailsPage = lazy(() =>
  import("pages/MovieDetailsPage/MovieDetailsPage.jsx"),
);

const Cast = lazy(() =>
  import("pages/Cast/Cast.jsx"),
);

const Reviews = lazy(() =>
  import("pages/Reviews/Reviews.jsx"),
);

const NotFoundPage = lazy(() =>
  import("pages/NotFoundPage/NotFoundPage.jsx" ),
);


export const App = () => {
  return (
    <>
      <Toaster />
      <div className="container">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="movies" exact element={<MoviesPage />} />
              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
