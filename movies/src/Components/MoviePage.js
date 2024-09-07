import React from 'react';
import MovieDetails from './MovieDetails';
import useMovieDetails from '../hooks/useMovieDetails';
import useMovieTrailer from '../hooks/useMovieTrailer';
import MovieCast from './MovieCast';
import useMovieCast from '../hooks/useMovieCast';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams();

 

  // Fetch movie details, cast, and trailer using the id
  useMovieDetails(id);
  useMovieCast(id);
  useMovieTrailer(id);
   // Return early if the id is not available
  if (!id) {
    return <div>Movie not found. Please check the URL and try again.</div>;
  }

  return (
    <div>
      <MovieDetails />
      <MovieCast />
    </div>
  );
};

export default MoviePage;





// import React, { useEffect } from 'react'
// import MovieDetails from './MovieDetails'
// import { useDispatch, useSelector } from 'react-redux'
// import { API_OPTIONS } from '../utils/Constant'
// import { addMovieDetails } from '../utils/movieDetailsSlice'
// import { useParams } from 'react-router-dom'

// const MoviePage = () => {
//     // const movies = useSelector((state) => state.movies);
//     // // console.log(movies.nowPlayingMovies[0]    )

//     // const {overview, original_title, id} = movies.nowPlayingMovies[0]
//     // console.log(overview, original_title, id)


//     const dispatch = useDispatch()

//     const {id} = useParams();
//     console.log(id);
//   const getMovieDetails = async () =>{
//   const movie_id = 1225377
//     const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, API_OPTIONS)
//     const json = await data.json();
//     console.log(json);
//     dispatch(addMovieDetails(json))
//   }

//   useEffect(() =>{
//     getMovieDetails()
//   })
//   return (
   
//     <div>
//       <MovieDetails/>
//     </div>
//   )
// }

// export default MoviePage
