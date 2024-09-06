import React from 'react'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import useFilter from '../hooks/useFilter'
import FilterMovies from './FilterMovies'
import useFilterMovies from '../hooks/useFilterMovies'

const MovieCategory = () => {
  useFilter();
  // const details = useSelector((store) => store.movieDetails);
  
  
  const movies = useSelector((store) => store.movies);
  // console.log(movies)
  const category = useSelector((store) => store.category);
  
    const filterGenres = useSelector((store) => store.filterGenres)
    const genres = filterGenres.geners
    const genreId = filterGenres.getGenreId
    const generTitle = filterGenres.getGenreName
    const generMovies = filterGenres.getGenreMovieList
    const lang = filterGenres.getMoviesLang
    
    // console.log(genreId, lang)
    useFilterMovies(genreId, lang)
   
   

  return (
    <div className='flex gap-5  p-8'>
      <div className='w-3/12'>
      <Filter genres = {genres}/>
      </div>
      {/* <div>
      {category.category === "nowPlaying" && <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />}
      {category.category === "topRated" && <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />}
      {category.category === "popular" && <MovieList title={"Popular"} movies={movies.popularMovies} />}
      {category.category === "upComing" && <MovieList title={"Up Coming"} movies={movies.upcomingMovies} />} 

      </div> */}
     {(genres.length === 0) ? null: (<div className='w-9/12'>
      <FilterMovies title={generTitle}  filterMovies={generMovies}/>
      </div>)}
    </div>

  )
}

export default MovieCategory
