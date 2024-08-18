import React from 'react'
import Header from './Header'
import Home from './Home'
import HomeMovieContainer from './HomeMovieContainer'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Body = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();      
  useUpcomingMovies();

  return (
    <div className='bg-[#f5f5f5]'>
      
      <Header />
      <Home/>
      <HomeMovieContainer/>
    </div>
  )
}

export default Body
