import React from 'react';
import MovieDetails from './MovieDetails';
import useMovieDetails from '../hooks/useMovieDetails';

const MoviePage = () => {
    useMovieDetails()
   

  return (
    <div>
      <MovieDetails />
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
