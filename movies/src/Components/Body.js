import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import MoviePage from './MoviePage';
import MovieCategory from './MovieCategory';
import Layout from './Layout'; // Import the Layout component

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
        element: <MovieCategory />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
