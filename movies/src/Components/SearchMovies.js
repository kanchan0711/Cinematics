import React from 'react'
import { useSelector } from 'react-redux';
import MovieCart from './MovieCart';

const SearchMovies = () => {
    const searchMovie = useSelector((store) => store.searchData);

  return (
    <>
      {searchMovie.map((movie)=> {
        <MovieCart key={movie.id} movie={movie}/>
      })}
    </>
  )
}

export default SearchMovies
