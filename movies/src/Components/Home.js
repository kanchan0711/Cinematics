import React from 'react'
import SearchBar from './SearchBar'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Home = () => {
    useNowPlayingMovies()
  return (
    
    <div>
      <SearchBar/>
    </div>
  )
}

export default Home
