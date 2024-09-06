import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import MoviePage from './MoviePage';
import Layout from './Layout'; // Import the Layout component
import FilterMovies from './FilterMovies';
import MovieCategory from './MovieCategory';
import MoviesList from './MoviesList';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap routes with the Layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movies/:id",
        element: <MoviePage />,
      },
      {
        path: "category",
        element: <MovieCategory/>

      },
      {
        path:"movies/nowPlaying",
        element: <MoviesList/>
      }
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
   
};

export default Body;
