import React from 'react'
import SearchBar from './SearchBar'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import HomeMovieContainer from './HomeMovieContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import useSearchMovies from '../hooks/useSearchMovies'

const Home = () => {
  const searchMovieName = useSelector((store) => store.searchData.searchMovieName )
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    useSearchMovies(searchMovieName)
  return (
    
    <div>
     
      <SearchBar/>
     
      <HomeMovieContainer/>
    </div>
  )
}

export default Home
