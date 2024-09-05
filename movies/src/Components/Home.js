import React from 'react'
import SearchBar from './SearchBar'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import HomeMovieContainer from './HomeMovieContainer'

const Home = () => {
    useNowPlayingMovies()
  return (
    
    <div>
     
      <SearchBar/>
     
      <HomeMovieContainer/>
    </div>
  )
}

export default Home
