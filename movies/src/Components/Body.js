import React from 'react'
import Header from './Header'
import Home from './Home'
import MoviePage from './MoviePage';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();      
  useUpcomingMovies();


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/movies/:id",
    element:<MoviePage/>
  }
])

  return (
    <div className='bg-[#f5f5f5]'>
      {/* <MoviePage/> */}
      <Header />
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
